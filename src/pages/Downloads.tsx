import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { listDownloads, deleteDownload, getDownloadUrl, type DownloadItem } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useToast } from '@/hooks/use-toast'

export default function Downloads() {
  const { data, isLoading } = useQuery({ queryKey: ['downloads'], queryFn: listDownloads })
  const items = (data?.items ?? []) as DownloadItem[]
  const { toast } = useToast()
  const qc = useQueryClient()

  const del = useMutation({
    mutationFn: (id: string) => deleteDownload(id),
    onSuccess: () => {
      toast({ title: 'Removed', description: 'Download removed from your library.' })
      qc.invalidateQueries({ queryKey: ['downloads'] })
    },
    onError: (e: any) => toast({ title: 'Error', description: e?.message || 'Failed to remove item', variant: 'destructive' })
  })

  const onDownload = async (id: string, title: string) => {
    try {
      const { url } = await getDownloadUrl(id)
      const a = document.createElement('a')
      a.href = url
      a.download = `${title}.pdf`
      document.body.appendChild(a)
      a.click()
      a.remove()
      toast({ title: 'Download started', description: title })
    } catch (e: any) {
      toast({ title: 'Download failed', description: e?.message || 'Try again later', variant: 'destructive' })
    }
  }

  return (
    <PageLayout title="Download Center" description="Manage your downloads and generated files.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
      ) : items.length ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg animate-fade-in">
          {items.map((d) => (
            <Card key={d.id} className="hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="line-clamp-1">{d.title}</span>
                  <Badge className="ml-2">{d.kind}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div>Size: {d.size}</div>
                <div>Added: {d.createdAt}</div>
                <div className="pt-sm flex gap-sm">
                  <Button asChild size="sm"><Link to={d.route}>View</Link></Button>
                  <Button size="sm" variant="outline" onClick={() => onDownload(d.id, d.title)}>Download</Button>
                  <Button size="sm" variant="destructive" onClick={() => del.mutate(d.id)} disabled={del.isPending}>Delete</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-muted-foreground">No downloads yet.</div>
      )}
    </PageLayout>
  )
}
