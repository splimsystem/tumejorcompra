const phones = [
    {
        "id" : "j7",
        "name" : "Samsung J7",
        "price" : 15000,
        "quote" : 1100,
        "month" : 12,
        "mustpay" : 5000,
        "color" : "Negro",
        "ram" : 2.5,
        "rom" : 16,
        "image" : "j7.png",
        "link" : "https://mpago.la/1MPkpGQ"
    }
    ,
    {
        "id" : "a12",
        "name" : "Samsung A12",
        "price" : 25000,
        "quote" : 2000,
        "month" : 12,
        "mustpay" : 5000,
        "color" : "Negro",
        "ram" : 4,
        "rom" : 128,
        "image" : "a12.png",
        "link" : "https://mpago.la/1MPkpGQ"
    }
    ,
    {
        "id" : "a32",
        "name" : "Samsung A32",
        "price" : 37000,
        "quote" : 3000,
        "month" : 12,
        "mustpay" : 6500,
        "color" : "Celeste",
        "ram" : 4,
        "rom" : 128,
        "image" : "a32.jpg",
        "link" : "https://mpago.la/2gJ6hXr"
    }
    ,
    {
        "id" : "a52",
        "name" : "Samsung A52",
        "price" : 49000,
        "quote" : 2800,
        "month" : 18,
        "mustpay" : 7000,
        "color" : "Violeta",
        "ram" : 6,
        "rom" : 128,
        "image" : "a52.jpg",
        "link" : "https://mpago.la/1LFExwq"
    }
    ,
    {
        "id" : "s21fe",
        "name" : "Samsung S21FE",
        "price" : 85000,
        "quote" : 3300,
        "month" : 24,
        "mustpay" : 11000,
        "color" : "Blanco",
        "ram" : 6,
        "rom" : 128,
        "image" : "s21fe.png",
        "link" : "https://mpago.la/1vzJ9G2"
    }
    ,
    {
        "id" : "e7",
        "name" : "Motorola E7 Plus",
        "price" : 20000,
        "quote" : 1500,
        "month" : 12,
        "mustpay" : 5000,
        "color" : "Azul",
        "ram" : 4,
        "rom" : 128,
        "image" : "motoe7.jpg",
        "link" : "https://mpago.la/1MPkpGQ"
    }
    ,
    {
        "id" : "g30",
        "name" : "Motorola G30",
        "price" : 37000,
        "quote" : 3000,
        "month" : 12,
        "mustpay" : 7000,
        "color" : "Negro",
        "ram" : 4,
        "rom" : 128,
        "image" : "motog30.png",
        "link" : "https://mpago.la/1LFExwq"
    }
    ,
    {
        "id" : "g60",
        "name" : "Motorola G60",
        "price" : 47000,
        "quote" : 4000,
        "month" : 12,
        "mustpay" : 7000,
        "color" : "Azul",
        "ram" : 4,
        "rom" : 128,
        "image" : "motog60.jpg",
        "link" : "https://mpago.la/1LFExwq"
    }
    ,
    {
        "id" : "edge",
        "name" : "Motorola Edge 20 Lite",
        "price" : 61000,
        "quote" : 3500,
        "month" : 18,
        "mustpay" : 9000,
        "color" : "Negro",
        "ram" : 6,
        "rom" : 128,
        "image" : "motoedge20lite.png",
        "link" : "https://mpago.la/2M1S8W3"
    }
    ,
    {
        "id" : "9a",
        "name" : "Xiaomi Redmi 9A",
        "price" : 22000,
        "quote" : 1700,
        "month" : 12,
        "mustpay" : 5000,
        "color" : "Negro",
        "ram" : 4,
        "rom" : 128,
        "image" : "redmi9a.jpg",
        "link" : "https://mpago.la/1MPkpGQ"
    }
    ,
    {
        "id" : "note11",
        "name" : "Xiaomi Note 11",
        "price" : 60000,
        "quote" : 3500,
        "month" : 18,
        "mustpay" : 8000,
        "color" : "Negro",
        "ram" : 6,
        "rom" : 128,
        "image" : "redminote11.png",
        "link" : "https://mpago.la/1EYEe8h"
    }
]

const CVU = [
    {
        "id" : 1,
        "cvu" : "0000003100042906860982",
        "alias" : "xenoxz31",
        "name" : "Gisela Vanina Gomez"
    }
    ,
    {
        "id" : 2,
        "cvu" : "0000003100077045162961",
        "alias" : "cuis.hipo.aclare.mp",
        "name" : "Carlos Andres Amarilla"
    }
]

function loadPhone(){

    const param = (window.location).toString().split('html?').pop()

    const phone = phones.find(phone => phone.id === param)

    let name = document.querySelector("#name")
    let price = document.querySelector("#price")
    let quote = document.querySelector("#quote")
    let mustpay = document.querySelector("#mustpay")
    let color = document.querySelector("#color")
    let ram = document.querySelector("#ram")
    let rom = document.querySelector("#rom")
    let image = document.querySelector("#image")
    let link = document.querySelector("#link")

    name.innerHTML = phone.name
    price.innerHTML = "$"+phone.price
    quote.innerHTML = phone.month+" Cuotas Mensuales de $"+phone.quote
    mustpay.innerHTML = "Anticipo (Primer PAGO) : $"+phone.mustpay
    color.innerHTML = "Color Disponible : "+phone.color
    ram.innerHTML = "Memoria RAM : "+phone.ram+"GB"
    rom.innerHTML = "Memoria : "+phone.rom+"GB"
    image.src = "./public/img/phones/"+phone.image
    link.href = "requisitos.html?"+phone.id
}

function loadPurchase(){

    const param = (window.location).toString().split('html?').pop()

    const phone = phones.find(phone => phone.id === param)

    let phoneImage = document.querySelector("#phoneImage")
    let phoneName = document.querySelector("#phoneName")

    let link = document.querySelector("#link")
    let cvuLink = document.querySelector("#cvuLink")
    let payLink = document.querySelector("#payLink")

    phoneImage.src = "./public/img/phones/"+phone.image
    phoneName.innerHTML = phone.name

    link.href = phone.link
    cvuLink.href = "cvu.html?"+phone.id
    payLink.href = "pay.html?"+phone.id
}

function loadPay(){

    const param = (window.location).toString().split('html?').pop()

    const phone = phones.find(phone => phone.id === param)

    let phoneImage = document.querySelector("#phoneImage")
    let phoneName = document.querySelector("#phoneName")
    let price = document.querySelector("#price")
    let quote = document.querySelector("#quote")
    let mustpay = document.querySelector("#mustpay")

    phoneImage.src = "./public/img/phones/"+phone.image
    phoneName.innerHTML = phone.name
    price.innerHTML = "Precio Total : $"+phone.price
    quote.innerHTML = "Cuotas: "+phone.month+" Cuotas Mensuales de $"+phone.quote
    mustpay.innerHTML = "Monto a Transferir (Primer Pago): $"+phone.mustpay
}

function loadCVU(){
    const cvuId = CVU.find(select => select.id === 1)
    const param = (window.location).toString().split('html?').pop()

    const phone = phones.find(phone => phone.id === param)

    let phoneImage = document.querySelector("#phoneImage")
    let phoneName = document.querySelector("#phoneName")
    let price = document.querySelector("#price")
    let quote = document.querySelector("#quote")
    let mustpay = document.querySelector("#mustpay")

    let name = document.querySelector("#name")
    let cvu = document.querySelector("#cvu")
    let alias = document.querySelector("#alias")

    phoneImage.src = "./public/img/phones/"+phone.image
    phoneName.innerHTML = phone.name
    price.innerHTML = "Precio Total : $"+phone.price
    quote.innerHTML = "Cuotas: "+phone.month+" Cuotas Mensuales de $"+phone.quote
    mustpay.innerHTML = "Monto a Transferir (Primer Pago): $"+phone.mustpay

    name.innerHTML = "Nombre : "+cvuId.name
    cvu.innerHTML = cvuId.cvu
    alias.innerHTML = cvuId.alias
}

function loadProcess(){
    let goBack = document.querySelector('.goBack')
    let process = document.querySelector('.process')
    let msg = document.querySelector('.inactive')
    let spinner = document.querySelector('.spinner')

    setTimeout(() => {
        process.classList.add('inactive')
        spinner.classList.add('inactive')
        msg.classList.remove('inactive')
        goBack.classList.remove('inactive')
        goBack.classList.add('activeBtn')
    }, 3000);
}