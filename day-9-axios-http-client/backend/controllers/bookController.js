exports.createBook = (req, res, next) => {
    res.json([
        { id: 1, title: 'Clean Code', author: 'Robert C. Martin' },
        { id: 2, title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
        { id: 3, title: 'Design Patterns', author: 'Erich Gamma' },
        { id: 4, title: 'Refactoring', author: 'Martin Fowler' },
        { id: 5, title: 'The Mythical', author: 'Fred Brooks' },
        { id: 6, title: 'Code Complete', author: 'Steve McConnell' },
        { id: 7, title: 'The Clean Coder', author: 'Robert C. Martin' },
        { id: 8, title: 'Domain-Driven Design', author: 'Eric Evans' },
        { id: 9, title: 'Working Effectively with Legacy Code', author: 'Michael Feathers' },
        { id: 10, title: 'Continuous Delivery', author: 'Jez Humble' }
    ]);
}