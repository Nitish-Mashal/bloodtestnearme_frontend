// stores/useQRCodeStore.js
import { defineStore } from 'pinia'

export const useQRCodeStore = defineStore('qrCode', {
  state: () => ({
    scannedId: null,
  }),
  actions: {
    setScannedId(id) {
      if (!id) return

      this.scannedId = id

      const data = {
        id,
        timestamp: Date.now(), // store current time
      }

      localStorage.setItem('scannedId', JSON.stringify(data))
      console.log('✅ Scanned ID saved:', id)
    },

    loadFromLocalStorage() {
      const storedData = localStorage.getItem('scannedId')
      if (storedData) {
        const { id, timestamp } = JSON.parse(storedData)

        // Check if expired (1 day = 24 * 60 * 60 * 1000 ms)
        const oneDay = 24 * 60 * 60 * 1000
        const isExpired = Date.now() - timestamp > oneDay

        if (isExpired) {
          console.log('⚠️ Scanned ID expired, clearing it...')
          this.clearScannedId()
        } else {
          this.scannedId = id
          console.log('✅ Loaded scanned ID from storage:', id)
        }
      }
    },

    clearScannedId() {
      this.scannedId = null
      localStorage.removeItem('scannedId')
      console.log('🗑️ Scanned ID cleared')
    },
  },
})

