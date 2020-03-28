const NotesService = {
    getAllNotes(knex) {
        return knex.select('*').from('notes')
    },

    insertNote(knex, newNote) {
        // returned an empty object that says that the promise has been resolved
        // return Promise.resolve({})
        return knex
            .insert(newNote)
            .into('notes')
            .returning('*')
            .then(arrayOfRows => {
                return arrayOfRows[0]
            })
    },

    getById(knex, id) {
        return knex.from('notes').select('*').where('id', id).first()
    },

    deleteNote(knex, id) {
        return knex('notes')
            .where({ id })
            .delete()
    },

    updateNote(knex, id, newNotes) {
        return knex('notes')
            .where({ id })
            .update(newNotes)
    }
}

module.exports = NotesService;