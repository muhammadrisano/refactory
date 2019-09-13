

class cart {

    constructor() {
        this.data = []
        total = 0
    }

    addItem(data) {
        this.data.push(data)
        if (data.quantity) {
            this.total += data.price * quantity
        } else if (data.price) {
            this.total += data.price
        }
    }

    removeItem(data) {
        idItem = data.item_id
        let itemIndex = ''
        this.data.map((item, index) => {
            if (item.item_id === idItem) {
                itemIndex = index
            }
        })
        this.data.splice(itemIndex, 1)

    }
    addDiscount(discont) {
        this.total = this.total * discont
    }

    totalItems() {
        return this.data.length
    }
    totalQuantity() {
        let totalQuantity = 0
        this.data.map((item) => {
            totalQuantity += item.quantity
        })
        return totalQuantity
    }

    totalPrice() {
        let totalPrice = 0
        this.data.map((item) => {
            totalPrice += item.quantity * item.price
        })
        return totalPrice
        // or
        // return this.total
    }
    showAll() {
        return this.data
    }

}