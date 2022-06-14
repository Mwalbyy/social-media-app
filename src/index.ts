import {MikroORM} from "@mikro-orm/core"
import { __prod__ } from "./constants"
import { Post } from "./entities/Post"

const main = async () => {
    const orm = await MikroORM.init({
        entities: [Post],
        dbName:'socialDB',
        type: 'postgresql',
        debug: !__prod__,
    })

    orm
}

console.log("hello bro")