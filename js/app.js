const img = document.querySelector('img');
const custName = document.getElementById('customer-name');
const custTxt = document.getElementById('customer-text');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

const customer = [
    {
        name: 'Rajeve',
        image: 'customer-0',
        text: 'This is a beautiful world we are living in.'
    },
    {
        name: 'Jake',
        image: 'customer-1',
        text: 'Hello my name is jake here is some random text.'
    },
    {
        name: 'Jill',
        image: 'customer-2',
        text: 'Some more random text by Jill.'
    },
    {
        name: 'Jack',
        image: 'customer-3',
        text: 'I am alive and free.'
    },
    {
        name: 'Bill',
        image: 'customer-4',
        text: 'The ruler of the world.'
    },
]

let counter = 0;

function testimonial(index) {
    if (index < 0) {
        counter = customer.length - 1;
    } else if (index >= customer.length) {
        counter = 0;
    }
    custName.textContent = customer[counter].name;
    custTxt.textContent = customer[counter].text;
    img.src = `img/${customer[counter].image}.jpg`;
}

prevBtn.addEventListener('click', () => {
    counter --
    testimonial(counter);
})

nextBtn.addEventListener('click', () => {
    counter ++
    testimonial(counter);
})

testimonial(counter);