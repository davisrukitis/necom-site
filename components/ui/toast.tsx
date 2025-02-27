import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Toast as RadixToast,
  ToastProvider as RadixToastProvider,
  ToastViewport as RadixToastViewport,
  ToastTitle as RadixToastTitle,
  ToastDescription as RadixToastDescription,
  ToastClose as RadixToastClose,
  ToastAction as RadixToastAction,
} from "@radix-ui/react-toast"

const Toast = React.forwardRef<React.ElementRef<typeof RadixToast>, React.ComponentPropsWithoutRef<typeof RadixToast>>(
  ({ className, ...props }, ref) => {
    return (
      <RadixToast
        ref={ref}
        className={cn(
          "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:zoom-out-95 data-[side=top]:border-b data-[side=bottom]:border-t",
          className,
        )}
        {...props}
      />
    )
  },
)
Toast.displayName = RadixToast.displayName

const ToastProvider = RadixToastProvider
const ToastViewport = React.forwardRef<
  React.ElementRef<typeof RadixToastViewport>,
  React.ComponentPropsWithoutRef<typeof RadixToastViewport>
>(({ className, ...props }, ref) => {
  return (
    <RadixToastViewport
      ref={ref}
      className={cn("fixed inset-0 z-[100] flex flex-col sm:items-end p-4 pointer-events-none", className)}
      {...props}
    />
  )
})
ToastViewport.displayName = RadixToastViewport.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof RadixToastTitle>,
  React.ComponentPropsWithoutRef<typeof RadixToastTitle>
>(({ className, ...props }, ref) => {
  return (
    <RadixToastTitle
      ref={ref}
      className={cn("text-sm font-semibold [&+div]:text-muted-foreground", className)}
      {...props}
    />
  )
})
ToastTitle.displayName = RadixToastTitle.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof RadixToastDescription>,
  React.ComponentPropsWithoutRef<typeof RadixToastDescription>
>(({ className, ...props }, ref) => {
  return <RadixToastDescription ref={ref} className={cn("text-sm mt-0.5", className)} {...props} />
})
ToastDescription.displayName = RadixToastDescription.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof RadixToastClose>,
  React.ComponentPropsWithoutRef<typeof RadixToastClose>
>(({ className, ...props }, ref) => {
  return (
    <RadixToastClose
      ref={ref}
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-muted-foreground focus:shadow-none transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
})
ToastClose.displayName = RadixToastClose.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof RadixToastAction>,
  React.ComponentPropsWithoutRef<typeof RadixToastAction>
>(({ className, ...props }, ref) => {
  return (
    <RadixToastAction
      ref={ref}
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-md bg-transparent px-3 text-sm font-medium transition-colors focus:shadow-none hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className,
      )}
      {...props}
    />
  )
})
ToastAction.displayName = RadixToastAction.displayName

export { Toast, ToastProvider, ToastViewport, ToastTitle, ToastDescription, ToastClose, ToastAction }

