// import React from 'react'
// import PageLayout from '@/components/layout/PageLayout'
// import { useNavigate, Link } from 'react-router-dom'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Button } from '@/components/ui/button'
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
// import { XCircle } from 'lucide-react'

// export default function PaymentFailed() {
//   const navigate = useNavigate()
//   return (
//     <PageLayout title="Payment Failed" description="There was an issue processing your payment.">
//       <div className="grid gap-md md:grid-cols-3">
//         <Card className="md:col-span-2 order-2 md:order-1">
//           <CardHeader>
//             <CardTitle>We couldn’t complete your payment</CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-md">
//             <Alert variant="destructive">
//               <XCircle className="h-4 w-4" />
//               <AlertTitle>Payment error</AlertTitle>
//               <AlertDescription>
//                 Your transaction was declined or interrupted. You can retry with a different method or contact support.
//               </AlertDescription>
//             </Alert>
//             <div className="flex gap-sm">
//               <Button onClick={() => navigate('/checkout')}>Retry Payment</Button>
//               <Button variant="outline" asChild><Link to="/payments">View History</Link></Button>
//             </div>
//             <p className="text-sm text-muted-foreground">If you were charged, the transaction will auto-reverse by your provider.
//               For assistance, email support@makandu.ng.</p>
//           </CardContent>
//         </Card>
//         <Card className="order-1 md:order-2">
//           <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
//           <CardContent className="space-y-1 text-sm text-muted-foreground">
//             <div className="flex items-center justify-between"><span>Item</span><span className="font-medium">Publication Fee</span></div>
//             <div className="flex items-center justify-between"><span>Total</span><span className="font-semibold">₦50,000</span></div>
//           </CardContent>
//         </Card>
//       </div>
//     </PageLayout>
//   )
// }



import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useNavigate, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { XCircle } from 'lucide-react'

export default function PaymentFailed() {
  const navigate = useNavigate()

  return (
    <PageLayout title="Payment Failed" description="There was an issue processing your payment.">
      {/* Centering container with green background gradient */}
      <div className="flex items-center justify-center min-h-[70vh] relative overflow-hidden">
        {/* Background decorative elements with green tones */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/80 via-green-200/50 to-green-100/80"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-green-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="w-full max-w-4xl mx-auto relative z-10">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2 order-2 md:order-1 transform transition-all duration-700 scale-100 opacity-100 translate-y-0 shadow-2xl border-0 bg-green-50/95 backdrop-blur-sm animate-float">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#0842a6] to-blue-700 bg-clip-text text-transparent">
                  Payment Failed
                </CardTitle>
                <p className="text-muted-foreground mt-2">There was an issue processing your payment.</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert variant="destructive" className="bg-red-50 border-red-200">
                  <XCircle className="h-5 w-5 text-red-600" />
                  <AlertTitle className="text-red-700 font-semibold">Payment Error</AlertTitle>
                  <AlertDescription className="text-red-600">
                    Your transaction was declined or interrupted. Please try again with a different payment method or contact our support team for assistance.
                  </AlertDescription>
                </Alert>
                <div className="flex gap-4 justify-center">
                  <Button 
                    onClick={() => navigate('/checkout')} 
                    className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800"
                  >
                    Retry Payment
                  </Button>
                  <Button 
                    variant="outline" 
                    asChild 
                    className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg border-[#0842a6]/50 hover:border-[#0842a6] hover:bg-[#0842a6]/10"
                  >
                    <Link to="/payments">View History</Link>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  If you were charged, the transaction will auto-reverse by your provider. For assistance, email{' '}
                  <a href="mailto:support@makandu.ng" className="text-[#0842a6] hover:underline">
                    support@makandu.ng
                  </a>.
                </p>
              </CardContent>
            </Card>
            <Card className="order-1 md:order-2 transform transition-all duration-700 scale-100 opacity-100 translate-y-0 shadow-2xl border-0 bg-green-50/95 backdrop-blur-sm animate-float">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#0842a6]">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Item</span>
                  <span className="font-medium text-[#0842a6]">Publication Fee</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Total</span>
                  <span className="font-semibold text-[#0842a6] text-lg">₦50,000</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Floating error message with animation */}
          <div className="text-center mt-4 transform transition-all duration-800 delay-1000 scale-100 opacity-100 translate-y-0">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg animate-pulse hover:animate-none transition-all duration-300">
              <XCircle className="h-4 w-4" />
              Payment Processing Issue
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