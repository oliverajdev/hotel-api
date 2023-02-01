# Reservas Hotel - TuGerente

#### Express - Nodejs
#### Sequelize con Mysql para la DB



```
npx sequelize db:create
```
```
npx sequelize db:migrate
```
```
npx sequelize db:seeed:all
```

Se crean habitaciones, clientes, metodos de pago y estados de reserva con los seeders

#### .env ejemplo

```
DB_NAME= hoteldb
DB_USER= admin
DB_PASSWORD= 12345678
DB_PORT= 3306
DB_HOST= mysqldb

DB_LOCAL_PORT=3307
DB_DOCKER_PORT=3306
```


### GET /room?<check_in>&<check_out>

Filtra las habitaciones disponibles segun la fecha de ingreso y egreso dadas por query para buscar la id de habitacion a reservar y los detalles de la misma. check_in y check_out en formato YYYY-MM-DD
muetra todos los detalles de las habitaciones , incluido el precio por noche.
![image](https://user-images.githubusercontent.com/86572008/216046863-eed18cc6-4a85-4eba-a726-0bed4c433764.png)

### POST /booking

Con las id de la habitacion obtenida y la fecha disponible podemos crear una nueva reserva. se setea con el estado 'PENDIENTE' Status_id = 1

![image](https://user-images.githubusercontent.com/86572008/216047075-f5f21da0-56d8-43fe-b580-22303bc90e31.png)

![image](https://user-images.githubusercontent.com/86572008/216048075-3e34d93a-5aa4-4882-9004-e30fdd3c0c30.png)



### GET /payment/methods

Ahora obtenemos los ids de los metodos de pago para elegir una opcion

![image](https://user-images.githubusercontent.com/86572008/216047502-ddbf80de-b2fe-4f82-88c2-ded84f05d07c.png)


### POST /payment

Procedemos a pagar con el id de la reserva, id de metodo de pago, el monto ya obtenidos de los detalles de la habitacion 

![image](https://user-images.githubusercontent.com/86572008/216049229-a7a9a33f-40a2-4bdd-9e4f-1f25c8dfb4ee.png)

el Status_id se actualiza a 2 'PAGADO' 
![image](https://user-images.githubusercontent.com/86572008/216049378-9ba51d8f-a47e-4f68-900f-29833a6e2a8a.png)

### PUT /booking

Ahora podemos cancelar la reserva. se pueden cancelar reservas pagadas o pendientes

![image](https://user-images.githubusercontent.com/86572008/216050037-c41dd66c-3f52-4506-8b80-65cdef47fd25.png)

![image](https://user-images.githubusercontent.com/86572008/216050105-1ef00272-fc57-465a-916c-662536ad3309.png)


### GET /room/{id}

Obtenemos todas las habitaciones asociadas a las las reservas de cada una o una busqueda por id si agregamos por params

![image](https://user-images.githubusercontent.com/86572008/216050595-9635239a-6e9c-463a-a8cb-cc768ec1b4b1.png)


### GET /client/id

Tambien podemos obtener los datos de un cliente con sus reservas asociadas

![image](https://user-images.githubusercontent.com/86572008/216051088-83a0e696-e5a5-407e-bf14-319908f740c5.png)


#### POST /client

podemos crear el cliente y obtener el id de cliente

![image](https://user-images.githubusercontent.com/86572008/216051557-cfef2344-6d10-4018-853b-bce6933b4a2e.png)









