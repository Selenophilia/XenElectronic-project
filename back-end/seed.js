import bcyrpt from 'bcryptjs'
const data = {
    users: [
        {
            name: 'Paulo Argenal',
            email: 'admin@email.com',
            password: bcyrpt.hashSync('password', 8),
            isAdmin: true
        },
        {
            name: 'John Doe',
            email: 'user@email.com',
            password: bcyrpt.hashSync('password', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: "Playstation 4 Console",
            category: 'console',
            price: 200,
            rating: 1,
            image: '/images/ps4-controller.jpeg',
            brand: 'Sony',
            numReviews: 10,
            description: 'a sony made playstation console',
            numStock: 20
        },
        {
            name: "Xbox 360 controller",
            category: 'console',
            price: 120,
            rating: 4.5,
            image: '/images/xbox-ctrl.jpeg',
            brand: 'Microsoft',
            numReviews: 20,
            description: 'a high quality controller',
            numStock: 0
        },
        {
            name: "logitech-502",
            category: 'mouse',
            price: 300,
            rating: 4.6,
            image: '/images/mouse-LG.jpeg',
            brand: 'logitech',
            numReviews: 30,
            description: 'a high quality mouse made by logitech',
            numStock: 30
        },
        {
            name: "Razer Mouse",
            category: 'mouse',
            price: 300,
            rating: 4,
            image: '/images/mouse-Razer.jpeg',
            brand: 'Razer',
            numReviews: 30,
            description: 'a high quality mouse made by Razer',
            numStock: 40
        },
        {
            name: "mech-keyboard-1",
            category: 'keyboards',
            price: 300,
            rating: 3,
            image: '/images/keeb-1.jpeg',
            brand: 'keeb-fam',
            numReviews: 40,
            description: 'a high quality mechanical keyboard',
            numStock: 50
        },
        {
            name: "mech-keyboard-2",
            category: 'keyboards',
            price: 300,
            rating: 4.3,
            image: '/images/keeb-2.jpeg',
            brand: 'keeb-fam',
            numReviews: 40,
            description: 'a high quality mechanical keyboard',
            numStock: 10
        },
        {
            name: "mech-keyboard-3",
            category: 'keyboards',
            price: 300,
            rating: 5,
            image: '/images/keeb-3.jpeg',
            brand: 'keeb-fam',
            numReviews: 30,
            description: 'a high quality mechanical keyboard',
            numStock: 5
        },
    ]
}

export default data