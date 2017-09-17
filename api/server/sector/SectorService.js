const Sector = require('./Sector');
const DatabaseService = require('../db/service/DatabaseService');

class SectorService {
    constructor() {
        this.DatabaseService = new DatabaseService();
    }

    async getAll() {
        try {
            const query = 'select s.* from ia.sector s order by s.id asc';
            const sectors = await this.DatabaseService.execute(query);

            if (!Array.isArray(sectors))
                return [new Sector(sectors)];

            return sectors.map(sector => new Sector(sector));

        } catch (error) {
            throw error;
        }

    }

    async getById(sectorId) {
        const query = 'select * from ia.sector where id = ?';
        try {
            const sector = await this.DatabaseService.execute(query, sectorId);

            return new Sector(sector);
        }
        catch (error) {
            throw error;
        }
    }

    async insert(sector) {
        const query = 'Insert into ia.sector Set ?';
        try {
            const result = await this.DatabaseService.execute(query, sector);

            sector.id = result.insertId;

            return new Sector(sector);
        }
        catch (error) {
            throw error;
        }
    }

    async update(sector) {
        const query = 'Update ia.sector Set ? where id = ?';
        try {
            await this.DatabaseService.execute(query, [sector, sector.id]);

            return new Sector(sector);
        }
        catch (error) {
            throw error;
        }
    }

    async delete(sectorId) {
        const query = 'delete from ia.sector where id = ?';
        try {
            await this.DatabaseService.execute(query, sectorId);

            return sectorId;
        }
        catch (error) {
            throw error;
        }
    }
}

module.exports = SectorService;
