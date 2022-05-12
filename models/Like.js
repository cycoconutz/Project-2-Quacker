const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const Post = require("./Post");

class Like extends Model {
    static like(body, models) {
        return models.Vote.create({
            user_id: body.user_id,
            post_id: body.post_id
        })
        .then(() => {
            return Post.fineOne({
                where: {
                    id: body.post_id
                }
            })
        })
    }
}