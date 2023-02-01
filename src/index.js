const app = require('./app');
const { sequelize } = require('./database/models/');



      sequelize.sync({ logging: false }).then(() => {
          console.log('Database connected');
          app.listen(3000, () => {
            console.log(`Server listening at ${3000}`); // eslint-disable-line no-console
          });
        }).catch((err) => {
          console.log(err);
        });

