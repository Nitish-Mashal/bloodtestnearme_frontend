import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCartStore = defineStore("cart", () => {
    const cartItems = ref([]);
    const homeCollectionCharge = 200; // fixed

    // ✅ Add item to cart (avoid duplicates)
    const addToCart = (item) => {
        const exists = cartItems.value.find((i) => i.name1 === item.name1);
        if (!exists) cartItems.value.push(item);
    };

    // ✅ Remove item
    const removeFromCart = (name1) => {
        cartItems.value = cartItems.value.filter((i) => i.name1 !== name1);
    };

    // ✅ Total Calculation
    const totalAmount = computed(() => {
        const totalDiscounted = cartItems.value.reduce(
            (sum, i) => sum + Number(i.discounted_price || 0),
            0
        );
        return totalDiscounted + (cartItems.value.length > 0 ? homeCollectionCharge : 0);
    });

    return { cartItems, addToCart, removeFromCart, totalAmount, homeCollectionCharge };
});
