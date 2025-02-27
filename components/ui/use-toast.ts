"use client"

import { useState, useEffect } from "react"

export const useToast = () => {
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [toast])

  const showToast = (message) => {
    setToast(message)
  }

  return { toast, showToast }
}

export const toast = {
  title: (title: string) => {
    // Implementation for title toast
  },
  description: (description: string) => {
    // Implementation for description toast
  },
}

