import { Grade } from './entity/Grade';
import { Wilder } from './entity/Wilder';
import { Skill } from './entity/Skill';
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
        type: "sqlite",
        database: "./wildersdb.sqlite",
        synchronize: true,
        entities: [Skill, Wilder,Grade],
        logging: ["query", "error"],
    });

export default dataSource;