//main one
// import React from 'react'
// import PageLayout from '@/components/layout/PageLayout'
// import { useSearchParams, Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { getPayment } from '@/lib/api'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { formatCurrency } from '@/lib/format'

// export default function PaymentSuccess() {
//   const [params] = useSearchParams()
//   const paymentId = params.get('paymentId') || ''
//   const { data, isLoading } = useQuery({ queryKey: ['payment', paymentId], queryFn: () => getPayment(paymentId), enabled: !!paymentId })

//   const getContinuePath = (desc?: string) => {
//     if (!desc) return '/payments'
//     const d = desc.toLowerCase()
//     if (d.includes('conference')) return '/my-registrations'
//     if (d.includes('publication') || d.includes('manuscript') || d.includes('journal')) return '/my-manuscripts'
//     return '/payments'
//   }

//   const downloadReceipt = () => {
//     if (!data) return
//     const lines = [
//       'Makandu Consortium – Payment Receipt',
//       `Payment ID: ${data.id}`,
//       `Description: ${data.description}`,
//       `Amount: ${formatCurrency(data.amount, data.currency)}`,
//       `Status: ${data.status}`,
//       `Date: ${data.createdAt}`,
//     ]
//     const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = `receipt-${data.id}.txt`
//     document.body.appendChild(a)
//     a.click()
//     a.remove()
//     URL.revokeObjectURL(url)
//   }

//   return (
//     <PageLayout title="Payment Success" description="Your payment has been confirmed.">
//       <Card>
//         <CardHeader>
//           <CardTitle>Thank you!</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-sm">
//           {isLoading ? (
//             <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
//           ) : data ? (
//             <>
//               <div className="grid md:grid-cols-2 gap-md">
//                 <div className="space-y-1">
//                   <div className="text-sm text-muted-foreground">Payment ID</div>
//                   <div className="font-medium">{data.id}</div>
//                   <div className="text-sm text-muted-foreground">Description</div>
//                   <div className="font-medium">{data.description}</div>
//                 </div>
//                 <div className="space-y-1">
//                   <div className="text-sm text-muted-foreground">Amount</div>
//                   <div className="font-medium">{formatCurrency(data.amount, data.currency)}</div>
//                   <div className="text-sm text-muted-foreground">Status</div>
//                   <div className="font-medium capitalize">{data.status}</div>
//                 </div>
//               </div>
//               <div className="pt-sm flex gap-sm">
//                 <Button onClick={downloadReceipt} variant="outline">Download Receipt</Button>
//                 <Button asChild><Link to={getContinuePath(data.description)}>Continue</Link></Button>
//               </div>
//             </>
//           ) : (
//             <div className="text-muted-foreground">Your payment was processed.</div>
//           )}
//         </CardContent>
//       </Card>
//     </PageLayout>
//   )
// }
////////////

//Added ones 
//NO1
// import React, { useState, useEffect } from 'react'
// import PageLayout from '@/components/layout/PageLayout'
// import { useSearchParams, Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { getPayment } from '@/lib/api'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { formatCurrency } from '@/lib/format'
// import { CheckCircle, Download, ArrowRight } from 'lucide-react'

// export default function PaymentSuccess() {
//   const [params] = useSearchParams()
//   const paymentId = params.get('paymentId') || ''
//   const [showAnimation, setShowAnimation] = useState(false)
//   const [showContent, setShowContent] = useState(false)
  
//   const { data, isLoading } = useQuery({ 
//     queryKey: ['payment', paymentId], 
//     queryFn: () => getPayment(paymentId), 
//     enabled: !!paymentId 
//   })

  // Trigger animations on mount
//   useEffect(() => {
//     const timer1 = setTimeout(() => setShowAnimation(true), 200)
//     const timer2 = setTimeout(() => setShowContent(true), 800)
    
//     return () => {
//       clearTimeout(timer1)
//       clearTimeout(timer2)
//     }
//   }, [])

//   const getContinuePath = (desc?: string) => {
//     if (!desc) return '/payments'
//     const d = desc.toLowerCase()
//     if (d.includes('conference')) return '/my-registrations'
//     if (d.includes('publication') || d.includes('manuscript') || d.includes('journal')) return '/my-manuscripts'
//     return '/payments'
//   }

//   const downloadReceipt = () => {
//     if (!data) return
//     const lines = [
//       'Makandu Consortium – Payment Receipt',
//       `Payment ID: ${data.id}`,
//       `Description: ${data.description}`,
//       `Amount: ${formatCurrency(data.amount, data.currency)}`,
//       `Status: ${data.status}`,
//       `Date: ${data.createdAt}`,
//     ]
//     const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = `receipt-${data.id}.txt`
//     document.body.appendChild(a)
//     a.click()
//     a.remove()
//     URL.revokeObjectURL(url)
//   }

//   return (
//     <PageLayout title="Payment Success" description="Your payment has been confirmed.">
//       {/* Centering container with background gradient */}
//       <div className="flex items-center justify-center min-h-[70vh] relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-blue-50/50"></div>
//         <div className="absolute top-10 left-10 w-32 h-32 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="w-full max-w-2xl mx-auto relative z-10">
//           <Card className={`transform transition-all duration-700 ${showAnimation ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'} shadow-2xl border-0 bg-white/95 backdrop-blur-sm`}>
            
//             {/* Animated Success Icon */}
//             <div className="flex justify-center pt-8 pb-4">
//               <div className="relative">
//                 {/* Ripple effects */}
//                 <div className={`absolute inset-0 bg-green-500/20 rounded-full transform transition-all duration-1000 ${showAnimation ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
//                 <div className={`absolute inset-0 bg-green-500/30 rounded-full transform transition-all duration-700 delay-200 ${showAnimation ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}></div>
                
//                 {/* Main success icon with checkmark animation */}
//                 <div className={`relative bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-full p-4 transform transition-all duration-500 ${showAnimation ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
//                   <CheckCircle size={40} className="drop-shadow-lg" />
//                 </div>
                
//                 {/* Floating success indicator */}
//                 <div className={`absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full p-1 transform transition-all duration-500 delay-500 ${showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
//                   <span className="text-xs font-bold">✓</span>
//                 </div>
//               </div>
//             </div>

//             <CardHeader className={`text-center pb-2 transform transition-all duration-500 delay-300 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               <CardTitle className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
//                 Payment Successful!
//               </CardTitle>
//               <p className="text-muted-foreground mt-2">Your payment has been successfully processed.</p>
//             </CardHeader>

//             <CardContent className={`space-y-6 transform transition-all duration-500 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               {isLoading ? (
//                 <div className="flex justify-center">
//                   <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
//                 </div>
//               ) : data ? (
//                 <>
//                   {/* Payment Details with enhanced styling */}
//                   <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl p-6 border border-gray-100">
//                     <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                       Transaction Details
//                     </h3>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-3">
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Payment ID</div>
//                           <div className="font-mono text-sm bg-white px-2 py-1 rounded border mt-1">{data.id}</div>
//                         </div>
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Description</div>
//                           <div className="font-medium mt-1">{data.description}</div>
//                         </div>
//                       </div>
//                       <div className="space-y-3">
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Amount Paid</div>
//                           <div className="font-bold text-green-600 text-xl mt-1">
//                             {formatCurrency(data.amount, data.currency)}
//                           </div>
//                         </div>
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Status</div>
//                           <div className="flex items-center gap-2 mt-1">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <span className="font-medium capitalize text-green-600">{data.status}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action buttons with hover animations */}
//                   <div className="flex gap-4 justify-center pt-2">
//                     <Button 
//                       onClick={downloadReceipt} 
//                       variant="outline" 
//                       className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg border-green-200 hover:border-green-300 hover:bg-green-50"
//                     >
//                       <Download className="mr-2 h-4 w-4" />
//                       Download Receipt
//                     </Button>
//                     <Button 
//                       asChild 
//                       className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
//                     >
//                       <Link to={getContinuePath(data.description)}>
//                         Continue
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </>
//               ) : (
//                 <div className="text-center text-muted-foreground">
//                   <div className="bg-green-50 border border-green-200 rounded-lg p-4">
//                     <CheckCircle className="mx-auto mb-2 text-green-600" size={24} />
//                     Your payment was processed successfully.
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Floating success message with enhanced animation */}
//           <div className={`text-center mt-4 transform transition-all duration-800 delay-1000 ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
//             <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce hover:animate-none transition-all duration-300">
//               <span className="animate-bounce">🎉</span>
//               Transaction Completed Successfully
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }




//NO2
// import React, { useState, useEffect, useRef } from 'react'
// import PageLayout from '@/components/layout/PageLayout'
// import { useSearchParams, Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { getPayment } from '@/lib/api'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { formatCurrency } from '@/lib/format'
// import { CheckCircle, Download, ArrowRight } from 'lucide-react'

// export default function PaymentSuccess() {
//   const [params] = useSearchParams()
//   const paymentId = params.get('paymentId') || ''
//   const [showAnimation, setShowAnimation] = useState(false)
//   const [showContent, setShowContent] = useState(false)
//   const canvasRef = useRef(null)

//   const { data, isLoading } = useQuery({ 
//     queryKey: ['payment', paymentId], 
//     queryFn: () => getPayment(paymentId), 
//     enabled: !!paymentId 
//   })

//   // Balloon animation logic
//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     let animationFrameId
//     const balloons = []

//     // Balloon class
//     class Balloon {
//       constructor() {
//         this.x = Math.random() * canvas.width
//         this.y = canvas.height + 50
//         this.radius = Math.random() * 20 + 10
//         this.speed = Math.random() * 2 + 1
//         this.color = `hsl(${Math.random() * 30 + 210}, 70%, ${Math.random() * 20 + 50}%)` // Variations of blue around #0842a6
//         this.angle = Math.random() * Math.PI * 2
//       }

//       update() {
//         this.y -= this.speed
//         this.x += Math.sin(this.angle) * 0.5
//         this.angle += 0.02
//       }

//       draw() {
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
//         ctx.fillStyle = this.color
//         ctx.fill()
//         // Draw string
//         ctx.beginPath()
//         ctx.moveTo(this.x, this.y + this.radius)
//         ctx.lineTo(this.x, this.y + this.radius + 30)
//         ctx.strokeStyle = '#0842a6'
//         ctx.stroke()
//       }
//     }

//     // Initialize balloons
//     for (let i = 0; i < 30; i++) {
//       balloons.push(new Balloon())
//     }

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       balloons.forEach(balloon => {
//         balloon.update()
//         balloon.draw()
//         if (balloon.y < -50) {
//           balloon.y = canvas.height + 50
//           balloon.x = Math.random() * canvas.width
//         }
//       })
//       animationFrameId = requestAnimationFrame(animate)
//     }

//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }
//     resizeCanvas()
//     window.addEventListener('resize', resizeCanvas)

//     // Start animations
//     animate()
//     const timer1 = setTimeout(() => setShowAnimation(true), 200)
//     const timer2 = setTimeout(() => setShowContent(true), 800)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//       window.removeEventListener('resize', resizeCanvas)
//       clearTimeout(timer1)
//       clearTimeout(timer2)
//     }
//   }, [])

//   const getContinuePath = (desc?: string) => {
//     if (!desc) return '/payments'
//     const d = desc.toLowerCase()
//     if (d.includes('conference')) return '/my-registrations'
//     if (d.includes('publication') || d.includes('manuscript') || d.includes('journal')) return '/my-manuscripts'
//     return '/payments'
//   }

//   const downloadReceipt = () => {
//     if (!data) return
//     const lines = [
//       'Makandu Consortium – Payment Receipt',
//       `Payment ID: ${data.id}`,
//       `Description: ${data.description}`,
//       `Amount: ${formatCurrency(data.amount, data.currency)}`,
//       `Status: ${data.status}`,
//       `Date: ${data.createdAt}`,
//     ]
//     const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = `receipt-${data.id}.txt`
//     document.body.appendChild(a)
//     a.click()
//     a.remove()
//     URL.revokeObjectURL(url)
//   }

//   return (
//     <PageLayout title="Payment Success" description="Your payment has been confirmed.">
//       {/* Canvas for balloon animation */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none z-0"
//       />

//       {/* Centering container with background gradient */}
//       <div className="flex items-center justify-center min-h-[70vh] relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-[#0842a6]/10 to-blue-50/50"></div>
//         <div className="absolute top-10 left-10 w-32 h-32 bg-[#0842a6]/20 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0842a6]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="w-full max-w-2xl mx-auto relative z-10">
//           <Card className={`transform transition-all duration-700 ${showAnimation ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'} shadow-2xl border-0 bg-white/95 backdrop-blur-sm`}>
            
//             {/* Animated Success Icon */}
//             <div className="flex justify-center pt-8 pb-4">
//               <div className="relative">
//                 {/* Ripple effects */}
//                 <div className={`absolute inset-0 bg-[#0842a6]/20 rounded-full transform transition-all duration-1000 ${showAnimation ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
//                 <div className={`absolute inset-0 bg-[#0842a6]/30 rounded-full transform transition-all duration-700 delay-200 ${showAnimation ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}></div>
                
//                 {/* Main success icon with checkmark animation */}
//                 <div className={`relative bg-gradient-to-br from-[#0842a6] to-blue-700 text-white rounded-full p-4 transform transition-all duration-500 ${showAnimation ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
//                   <CheckCircle size={40} className="drop-shadow-lg" />
//                 </div>
                
//                 {/* Floating success indicator */}
//                 <div className={`absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full p-1 transform transition-all duration-500 delay-500 ${showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
//                   <span className="text-xs font-bold">✓</span>
//                 </div>
//               </div>
//             </div>

//             <CardHeader className={`text-center pb-2 transform transition-all duration-500 delay-300 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#0842a6] to-blue-700 bg-clip-text text-transparent">
//                 Payment Successful!
//               </CardTitle>
//               <p className="text-muted-foreground mt-2">Your payment has been successfully processed.</p>
//             </CardHeader>

//             <CardContent className={`space-y-6 transform transition-all duration-500 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               {isLoading ? (
//                 <div className="flex justify-center">
//                   <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
//                 </div>
//               ) : data ? (
//                 <>
//                   {/* Payment Details with enhanced styling */}
//                   <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl p-6 border border-gray-100">
//                     <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                       <div className="w-2 h-2 bg-[#0842a6] rounded-full animate-pulse"></div>
//                       Transaction Details
//                     </h3>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-3">
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Payment ID</div>
//                           <div className="font-mono text-sm bg-white px-2 py-1 rounded border mt-1">{data.id}</div>
//                         </div>
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Description</div>
//                           <div className="font-medium mt-1">{data.description}</div>
//                         </div>
//                       </div>
//                       <div className="space-y-3">
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Amount Paid</div>
//                           <div className="font-bold text-[#0842a6] text-xl mt-1">
//                             {formatCurrency(data.amount, data.currency)}
//                           </div>
//                         </div>
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Status</div>
//                           <div className="flex items-center gap-2 mt-1">
//                             <div className="w-2 h-2 bg-[#0842a6] rounded-full animate-pulse"></div>
//                             <span className="font-medium capitalize text-[#0842a6]">{data.status}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action buttons with hover animations */}
//                   <div className="flex gap-4 justify-center pt-2">
//                     <Button 
//                       onClick={downloadReceipt} 
//                       variant="outline" 
//                       className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg border-[#0842a6]/50 hover:border-[#0842a6] hover:bg-[#0842a6]/10"
//                     >
//                       <Download className="mr-2 h-4 w-4" />
//                       Download Receipt
//                     </Button>
//                     <Button 
//                       asChild 
//                       className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800"
//                     >
//                       <Link to={getContinuePath(data.description)}>
//                         Continue
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </>
//               ) : (
//                 <div className="text-center text-muted-foreground">
//                   <div className="bg-[#0842a6]/10 border border-[#0842a6]/20 rounded-lg p-4">
//                     <CheckCircle className="mx-auto mb-2 text-[#0842a6]" size={24} />
//                     Your payment was processed successfully.
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Floating success message with enhanced animation */}
//           <div className={`text-center mt-4 transform transition-all duration-800 delay-1000 ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
//             <div className="inline-flex items-center gap-2 bg-[#0842a6] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce hover:animate-none transition-all duration-300">
//               <span className="animate-bounce">🎉</span>
//               Transaction Completed Successfully
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }


//NO3
// import React, { useState, useEffect, useRef } from 'react'
// import PageLayout from '@/components/layout/PageLayout'
// import { useSearchParams, Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// import { getPayment } from '@/lib/api'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { formatCurrency } from '@/lib/format'
// import { CheckCircle, Download, ArrowRight } from 'lucide-react'

// export default function PaymentSuccess() {
//   const [params] = useSearchParams()
//   const paymentId = params.get('paymentId') || ''
//   const [showAnimation, setShowAnimation] = useState(false)
//   const [showContent, setShowContent] = useState(false)
//   const canvasRef = useRef(null)

//   const { data, isLoading } = useQuery({ 
//     queryKey: ['payment', paymentId], 
//     queryFn: () => getPayment(paymentId), 
//     enabled: !!paymentId 
//   })

//   // Balloon animation logic
//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     let animationFrameId
//     const balloons = []

//     // Balloon class
//     class Balloon {
//       constructor() {
//         this.x = Math.random() * canvas.width
//         this.y = canvas.height + 50
//         this.radius = Math.random() * 20 + 10
//         this.speed = Math.random() * 2 + 1
//         this.color = `hsl(${Math.random() * 30 + 210}, 70%, ${Math.random() * 20 + 50}%)` // Variations of blue around #0842a6
//         this.angle = Math.random() * Math.PI * 2
//       }

//       update() {
//         this.y -= this.speed
//         this.x += Math.sin(this.angle) * 0.5
//         this.angle += 0.02
//       }

//       draw() {
//         ctx.beginPath()
//         ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
//         ctx.fillStyle = this.color
//         ctx.fill()
//         // Draw string
//         ctx.beginPath()
//         ctx.moveTo(this.x, this.y + this.radius)
//         ctx.lineTo(this.x, this.y + this.radius + 30)
//         ctx.strokeStyle = '#0842a6'
//         ctx.stroke()
//       }
//     }

//     // Initialize balloons
//     for (let i = 0; i < 30; i++) {
//       balloons.push(new Balloon())
//     }

//     // Animation loop
//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       balloons.forEach(balloon => {
//         balloon.update()
//         balloon.draw()
//         if (balloon.y < -50) {
//           balloon.y = canvas.height + 50
//           balloon.x = Math.random() * canvas.width
//         }
//       })
//       animationFrameId = requestAnimationFrame(animate)
//     }

//     // Set canvas size
//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth
//       canvas.height = window.innerHeight
//     }
//     resizeCanvas()
//     window.addEventListener('resize', resizeCanvas)

//     // Start animations
//     animate()
//     const timer1 = setTimeout(() => setShowAnimation(true), 200)
//     const timer2 = setTimeout(() => setShowContent(true), 800)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//       window.removeEventListener('resize', resizeCanvas)
//       clearTimeout(timer1)
//       clearTimeout(timer2)
//     }
//   }, [])

//   const getContinuePath = (desc?: string) => {
//     if (!desc) return '/payments'
//     const d = desc.toLowerCase()
//     if (d.includes('conference')) return '/my-registrations'
//     if (d.includes('publication') || d.includes('manuscript') || d.includes('journal')) return '/my-manuscripts'
//     return '/payments'
//   }

//   const downloadReceipt = () => {
//     if (!data) return
//     const lines = [
//       'Makandu Consortium – Payment Receipt',
//       `Payment ID: ${data.id}`,
//       `Description: ${data.description}`,
//       `Amount: ${formatCurrency(data.amount, data.currency)}`,
//       `Status: ${data.status}`,
//       `Date: ${data.createdAt}`,
//     ]
//     const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
//     const url = URL.createObjectURL(blob)
//     const a = document.createElement('a')
//     a.href = url
//     a.download = `receipt-${data.id}.txt`
//     document.body.appendChild(a)
//     a.click()
//     a.remove()
//     URL.revokeObjectURL(url)
//   }

//   return (
//     <PageLayout title="Payment Success" description="Your payment has been confirmed.">
//       {/* Canvas for balloon animation */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 pointer-events-none z-0"
//       />

//       {/* Centering container with green background gradient */}
//       <div className="flex items-center justify-center min-h-[70vh] relative overflow-hidden">
//         {/* Background decorative elements with green tones */}
//         <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-green-200/50 to-green-100/80"></div>
//         <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
//         <div className="w-full max-w-2xl mx-auto relative z-10">
//           <Card className={`transform transition-all duration-700 ${showAnimation ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'} shadow-2xl border-0 bg-green-50/95 backdrop-blur-sm`}>
            
//             {/* Animated Success Icon */}
//             <div className="flex justify-center pt-8 pb-4">
//               <div className="relative">
//                 {/* Ripple effects */}
//                 <div className={`absolute inset-0 bg-[#0842a6]/20 rounded-full transform transition-all duration-1000 ${showAnimation ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
//                 <div className={`absolute inset-0 bg-[#0842a6]/30 rounded-full transform transition-all duration-700 delay-200 ${showAnimation ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}></div>
                
//                 {/* Main success icon with checkmark animation */}
//                 <div className={`relative bg-gradient-to-br from-[#0842a6] to-blue-700 text-white rounded-full p-4 transform transition-all duration-500 ${showAnimation ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
//                   <CheckCircle size={40} className="drop-shadow-lg" />
//                 </div>
                
//                 {/* Floating success indicator */}
//                 <div className={`absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full p-1 transform transition-all duration-500 delay-500 ${showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
//                   <span className="text-xs font-bold">✓</span>
//                 </div>
//               </div>
//             </div>

//             <CardHeader className={`text-center pb-2 transform transition-all duration-500 delay-300 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#0842a6] to-blue-700 bg-clip-text text-transparent">
//                 Payment Successful!
//               </CardTitle>
//               <p className="text-muted-foreground mt-2">Your payment has been successfully processed.</p>
//             </CardHeader>

//             <CardContent className={`space-y-6 transform transition-all duration-500 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//               {isLoading ? (
//                 <div className="flex justify-center">
//                   <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
//                 </div>
//               ) : data ? (
//                 <>
//                   {/* Payment Details with enhanced styling */}
//                   <div className="bg-gradient-to-r from-green-100 to-green-50/50 rounded-xl p-6 border border-green-200">
//                     <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
//                       <div className="w-2 h-2 bg-[#0842a6] rounded-full animate-pulse"></div>
//                       Transaction Details
//                     </h3>
                    
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-3">
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Payment ID</div>
//                           <div className="font-mono text-sm bg-white px-2 py-1 rounded border mt-1">{data.id}</div>
//                         </div>
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Description</div>
//                           <div className="font-medium mt-1">{data.description}</div>
//                         </div>
//                       </div>
//                       <div className="space-y-3">
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Amount Paid</div>
//                           <div className="font-bold text-[#0842a6] text-xl mt-1">
//                             {formatCurrency(data.amount, data.currency)}
//                           </div>
//                         </div>
//                         <div>
//                           <div className="text-sm text-muted-foreground font-medium">Status</div>
//                           <div className="flex items-center gap-2 mt-1">
//                             <div className="w-2 h-2 bg-[#0842a6] rounded-full animate-pulse"></div>
//                             <span className="font-medium capitalize text-[#0842a6]">{data.status}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action buttons with hover animations */}
//                   <div className="flex gap-4 justify-center pt-2">
//                     <Button 
//                       onClick={downloadReceipt} 
//                       variant="outline" 
//                       className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg border-[#0842a6]/50 hover:border-[#0842a6] hover:bg-[#0842a6]/10"
//                     >
//                       <Download className="mr-2 h-4 w-4" />
//                       Download Receipt
//                     </Button>
//                     <Button 
//                       asChild 
//                       className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800"
//                     >
//                       <Link to={getContinuePath(data.description)}>
//                         Continue
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </Link>
//                     </Button>
//                   </div>
//                 </>
//               ) : (
//                 <div className="text-center text-muted-foreground">
//                   <div className="bg-green-100 border border-green-200 rounded-lg p-4">
//                     <CheckCircle className="mx-auto mb-2 text-[#0842a6]" size={24} />
//                     Your payment was processed successfully.
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>

//           {/* Floating success message with enhanced animation */}
//           <div className={`text-center mt-4 transform transition-all duration-800 delay-1000 ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
//             <div className="inline-flex items-center gap-2 bg-[#0842a6] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce hover:animate-none transition-all duration-300">
//               <span className="animate-bounce">🎉</span>
//               Transaction Completed Successfully
//             </div>
//           </div>
//         </div>
//       </div>
//     </PageLayout>
//   )
// }


import React, { useState, useEffect, useRef } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useSearchParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPayment } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'
import { CheckCircle, Download, ArrowRight } from 'lucide-react'

export default function PaymentSuccess() {
  const [params] = useSearchParams()
  const paymentId = params.get('paymentId') || ''
  const [showAnimation, setShowAnimation] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const canvasRef = useRef(null)

  const { data, isLoading } = useQuery({ 
    queryKey: ['payment', paymentId], 
    queryFn: () => getPayment(paymentId), 
    enabled: !!paymentId 
  })

  // Balloon animation logic
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    const balloons = []

    // Balloon class
    class Balloon {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + 50
        this.radius = Math.random() * 20 + 10
        this.speed = Math.random() * 2 + 1
        this.color = `hsl(${Math.random() * 30 + 210}, 70%, ${Math.random() * 20 + 50}%)` // Variations of blue around #0842a6
        this.angle = Math.random() * Math.PI * 2
      }

      update() {
        this.y -= this.speed
        this.x += Math.sin(this.angle) * 0.5
        this.angle += 0.02
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
        // Draw string
        ctx.beginPath()
        ctx.moveTo(this.x, this.y + this.radius)
        ctx.lineTo(this.x, this.y + this.radius + 30)
        ctx.strokeStyle = '#0842a6'
        ctx.stroke()
      }
    }

    // Initialize balloons
    for (let i = 0; i < 30; i++) {
      balloons.push(new Balloon())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      balloons.forEach(balloon => {
        balloon.update()
        balloon.draw()
        if (balloon.y < -50) {
          balloon.y = canvas.height + 50
          balloon.x = Math.random() * canvas.width
        }
      })
      animationFrameId = requestAnimationFrame(animate)
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Start animations
    animate()
    const timer1 = setTimeout(() => setShowAnimation(true), 200)
    const timer2 = setTimeout(() => setShowContent(true), 800)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  const getContinuePath = (desc?: string) => {
    if (!desc) return '/payments'
    const d = desc.toLowerCase()
    if (d.includes('conference')) return '/my-registrations'
    if (d.includes('publication') || d.includes('manuscript') || d.includes('journal')) return '/my-manuscripts'
    return '/payments'
  }

  const downloadReceipt = () => {
    if (!data) return
    const lines = [
      'Makandu Consortium – Payment Receipt',
      `Payment ID: ${data.id}`,
      `Description: ${data.description}`,
      `Amount: ${formatCurrency(data.amount, data.currency)}`,
      `Status: ${data.status}`,
      `Date: ${data.createdAt}`,
    ]
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `receipt-${data.id}.txt`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <PageLayout title="Payment Success" description="Your payment has been confirmed.">
      {/* Canvas for balloon animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Centering container with green background gradient */}
      <div className="flex items-center justify-center min-h-[70vh] relative overflow-hidden">
        {/* Background decorative elements with green tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-green-200/50 to-green-100/80"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="w-full max-w-2xl mx-auto relative z-10">
          <Card className={`transform transition-all duration-700 ${showAnimation ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'} shadow-2xl border-0 bg-green-50/95 backdrop-blur-sm animate-float`}>
            
            {/* Animated Success Icon */}
            <div className="flex justify-center pt-8 pb-4">
              <div className="relative">
                {/* Ripple effects */}
                <div className={`absolute inset-0 bg-[#0842a6]/20 rounded-full transform transition-all duration-1000 ${showAnimation ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}></div>
                <div className={`absolute inset-0 bg-[#0842a6]/30 rounded-full transform transition-all duration-700 delay-200 ${showAnimation ? 'scale-125 opacity-0' : 'scale-100 opacity-100'}`}></div>
                
                {/* Main success icon with checkmark animation */}
                <div className={`relative bg-gradient-to-br from-[#0842a6] to-blue-700 text-white rounded-full p-4 transform transition-all duration-500 ${showAnimation ? 'scale-100 rotate-0' : 'scale-0 -rotate-180'}`}>
                  <CheckCircle size={40} className="drop-shadow-lg" />
                </div>
                
                {/* Floating success indicator */}
                <div className={`absolute -top-2 -right-2 bg-yellow-400 text-yellow-800 rounded-full p-1 transform transition-all duration-500 delay-500 ${showAnimation ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                  <span className="text-xs font-bold">✓</span>
                </div>
              </div>
            </div>

            <CardHeader className={`text-center pb-2 transform transition-all duration-500 delay-300 ${showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#0842a6] to-blue-700 bg-clip-text text-transparent">
                Payment Successful!
              </CardTitle>
              <p className="text-muted-foreground mt-2">Your payment has been successfully processed.</p>
            </CardHeader>

            <CardContent className={`space-y-6 transform transition-all duration-500 delay-500 ${showContent ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              {isLoading ? (
                <div className="flex justify-center">
                  <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
                </div>
              ) : data ? (
                <>
                  {/* Payment Details with enhanced styling */}
                  <div className="bg-gradient-to-r from-green-100 to-green-50/50 rounded-xl p-6 border border-green-200">
                    <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#

0842a6] rounded-full animate-pulse"></div>
                      Transaction Details
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">Payment ID</div>
                          <div className="font-mono text-sm bg-white px-2 py-1 rounded border mt-1">{data.id}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">Description</div>
                          <div className="font-medium mt-1">{data.description}</div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">Amount Paid</div>
                          <div className="font-bold text-[#0842a6] text-xl mt-1">
                            {formatCurrency(data.amount, data.currency)}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground font-medium">Status</div>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="w-2 h-2 bg-[#0842a6] rounded-full animate-pulse"></div>
                            <span className="font-medium capitalize text-[#0842a6]">{data.status}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action buttons with hover animations */}
                  <div className="flex gap-4 justify-center pt-2">
                    <Button 
                      onClick={downloadReceipt} 
                      variant="outline" 
                      className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg border-[#0842a6]/50 hover:border-[#0842a6] hover:bg-[#0842a6]/10"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Receipt
                    </Button>
                    <Button 
                      asChild 
                      className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      <Link to={getContinuePath(data.description)}>
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </>
              ) : (
                <div className="text-center text-muted-foreground">
                  <div className="bg-green-100 border border-green-200 rounded-lg p-4">
                    <CheckCircle className="mx-auto mb-2 text-[#0842a6]" size={24} />
                    Your payment was processed successfully.
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Floating success message with enhanced animation */}
          <div className={`text-center mt-4 transform transition-all duration-800 delay-1000 ${showContent ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}`}>
            <div className="inline-flex items-center gap-2 bg-[#0842a6] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-bounce hover:animate-none transition-all duration-300">
              <span className="animate-bounce">🎉</span>
              Transaction Completed Successfully
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </PageLayout>
  )
}