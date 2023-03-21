const {ObjectId} = require('mongoose').Types
//Note: Mongodb Aggregation does not take the id as string we should pass it as a string
```
let data = await studentModel.aggregate([
  {
    $match: {
      _id: ObjectId(id),
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "users",
    },
  },
  {
    $project: {
      _id: 0,
    },
  },
]);
```
