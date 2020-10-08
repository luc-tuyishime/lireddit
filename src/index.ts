import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig); // Connect to database
    await orm.getMigrator().up(); // RUN migration

    const app = express();

    app.get("/", (_, res) => {
        res.send("hello");
    });

    app.listen(4000, () => {
        console.log("server started on port 4000");
    });
};

main().catch((err) => console.error(err));
