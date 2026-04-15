// Task 1

class PrintEditionItem {
   
    constructor(name, releaseDate, pagesCount) {
        this.name = name
        this.releaseDate = releaseDate
        this.pagesCount = pagesCount
        this._state = 100
        this.type = null
    }
    fix() {
        this.state = this.state * 1.5;
    }
    set state(newState) {     
        if(newState < 0) {
            this._state = 0  
        }else if(newState > 100) {
            this._state = 100
        }else {
            this._state = newState
        }
    }
    get state() {
        return this._state
    }
}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.type = "magazine"
        this.state = 100
    }    
}
class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount)
        this.author = author
        this.type = "book"
        this.state = 100
    }    
}



class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "novel"
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "detective"
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount)
        this.type = "fantastic"
    }
}

// // Task2

class Library {
    constructor(name) {
        this.name = name
        this.books = []
    }
    addBook(book) {
        if(book.state > 30) {
          this.books.push(book)  
        }
    }
    findBookBy(type, value) {
        const findedBook = this.books.find((item) => {
            return item[type] === value
        })
        return findedBook || null
    }
    giveBookByName(bookName) {
        const findedIndexBook = this.books.findIndex((item) => {
            return item.name === bookName
        })
        if(findedIndexBook < 0) {
            return null
        }
        return this.books.splice(findedIndexBook, 1)[0]
    }
}


