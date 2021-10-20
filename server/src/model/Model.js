module.exports = class Model {
    constructor(database, table) {
        this.database = database;
        this.table = table;
    }

    all(table = null, select = false) {
      return this.database(table ? table : this.table).select(select ? select : '*');
    }

    find(conditions) {
        return this.database(this.table).where(conditions).select();
    }

    findOne(conditions) {
        return this.database(this.table).where(conditions).first();
    }

    findById(id) {
        return this.database(this.table).where({id}).select().first();
    }

    insert(values) {
        return this.database(this.table).insert(values);
    }

    store(table = null) {
        return this.database(table ? table : this.table);
    }
}
