const {ObjectId} = require('mongoose').Types

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
