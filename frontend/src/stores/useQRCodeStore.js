// stores/useQRCodeStore.js
import { defineStore } from 'pinia'

export const useQRCodeStore = defineStore('qrCode', {
  state: () => ({
    scannedId: null,
  }),

  actions: {
    // ✅ Extract scannedId from URL and store it
    checkUrlAndStoreId() {
      const urlParams = new URLSearchParams(window.location.search)
      const idFromUrl = urlParams.get('scannedId')

      if (idFromUrl) {
        this.setScannedId(idFromUrl)
      } else {
        this.loadFromLocalStorage()
      }
    },

    // ✅ Store scannedId in localStorage with timestamp
    setScannedId(id) {
      if (!id) return
      this.scannedId = id
      const data = {
        id,
        timestamp: Date.now(), // current time
      }
      localStorage.setItem('scannedId', JSON.stringify(data))
      console.log('✅ Scanned ID saved:', id)
    },

    // ✅ Load scannedId from localStorage (if not expired)
    loadFromLocalStorage() {
      const storedData = localStorage.getItem('scannedId')
      if (storedData) {
        const { id, timestamp } = JSON.parse(storedData)

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

    // ✅ Clear scannedId manually
    clearScannedId() {
      this.scannedId = null
      localStorage.removeItem('scannedId')
      console.log('🗑️ Scanned ID cleared')
    },
  },
})
