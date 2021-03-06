import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, { name: "name" });
  await orm.em.persistAndFlush(post);
};

main().catch((err) => {
  console.error(err);
});
