import data from './employees.json' assert {type: 'json'}

for (let i = 0; i < data.employees.length; i++) {

    const object = data.employees[i]
    let table = document.createElement('div')
    table.style.border = '3px solid green'
    table.style.padding = '10px'
    table.style.marginBottom = '10px'
    // table.style.maxWidth = 'fit-content'

    document.body.append(table)
    // console.log(object)

    for (let prop in object) {

        let cont = document.createElement('div')
        cont.style.borderBottom = '1px solid tomato'
        cont.innerHTML = `<p>${prop}</p>: <h4> ${object[prop]}</h4>`
        cont.style.fontSize = '1.5rem'
        cont.style.padding = '.5rem'


        console.log(`${prop}: ${object[prop]}`)

        table.append(cont)
    }

}