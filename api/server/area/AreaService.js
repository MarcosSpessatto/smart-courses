const Area = require('./Area');
const DatabaseService = require('../db/service/DatabaseService');

class AreaService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = 'select a.* from ia.area a order by a.name desc';
            const areas = await this.DatabaseService.execute(query);

            if (!Array.isArray(areas))
                return [new Area(areas)];

            return areas.map(area => new Area(area));

        } catch (error) {
            throw error;
        }

    }

    async getById(areaId) {
        const query = 'select * from ia.area where id = ?';
        try {
            const area = await this.DatabaseService.execute(query, areaId);

            return new Area(area);
        }
        catch (error) {
            throw error;
        }
    }

    async insert(area) {
        const query = 'Insert into ia.area Set ?';
        try {
            const result = await this.DatabaseService.execute(query, area);

            area.id = result.insertId;

            return new Area(area);
        }
        catch (error) {
            throw error;
        }
    }

    async update(area) {
        const query = 'Update ia.area Set ? where id = ?';
        try {
            await this.DatabaseService.execute(query, [area, area.id]);

            return new Area(area);
        }
        catch (error) {
            throw error;
        }
    }

    async delete(areaId) {
        const query = 'delete from ia.area where id = ?';
        try {
            await this.DatabaseService.execute(query, areaId);

            return areaId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = AreaService;
