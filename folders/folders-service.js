const foldersService = {
    getAllFolders(knex) {
        return knex.select('*').from('folders')
    },

    insertFolder(knex, newFolder) {
        // returned an empty object that says that the promise has been resolved
        // return Promise.resolve({})
        return knex
            .insert(newFolder)
            .into('folders')
            .returning('*')
            .then(arrayOfRows => {
                return arrayOfRows[0]
            })
    },

    getById(knex, id) {
        return knex.from('folders').select('*').where('id', id).first()
    },

    deleteFolder(knex, id) {
        return knex('folders')
            .where({ id })
            .delete()
    },

    updateFolder(knex, id, newfolders) {
        return knex('folders')
            .where({ id })
            .update(newfolders)
    }
}

module.exports = foldersService;