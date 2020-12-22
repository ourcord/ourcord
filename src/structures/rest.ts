/* eslint-disable camelcase, require-jsdoc */
import {Client} from "../websocket";
import User from "./user";

export class Rest {
  id: string;
  user_id: string;
  user: object;

  /**
   *
   * @param {Rest} data
   * @param {Client} client
   */
  constructor(data: Rest, client: Client) {
    this.id = data.id;
    this.user = {
      id: data.user_id,
      user: async function() {
        const r = await client._GetRestUser(data.user_id);
        return new User(r);
      },
    };
  }
}
