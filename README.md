# VariedadeStelias

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) version `14.1.0`, para los estilos se utilizo `Boostrap` y como base de datos `Firebase`.

## Descripcion del Proyecto

Este proyecto lo llame `VariedadeStelias` haciendo referencia a un local comercial el cual se venden productos 
varios. Principalmente el objetivo es tener una base de datos en la cual se pueda verificar precios y ver cantidad de productos existentes, esto para facilitar y tener pendientes cuando se deba reabastecer los productos ademas este establecimiento posee una dificultad que cuando el vendedor principal no se encuentra tienen problemas al no conocer los valores de los productos, por ende esta app gracias a la base de datos podra mejorar el servicio.

### Pagina Principal

Esta pagina consta con un carrucel de bienvenida a la aplicacion la cual mostrara ofertas para tener encuenta.
Cabe resaltar que esta app cuenta con un banner y un menu de navegacion para desplazarse entre sus funciones.

### Nuevos Productos

Esta opcion como su nombre lo indica es para realizar el ingreso a productos nuevos, esta funcion esta construida sobre un `modal` la cual consta con una serie de `inputs` los cuales recopilan la informacion necesaria para los productos, ademas tiene su boton agregar y cancelar. Los datos recopilados son enviados a la base de datos en `Firebase`.

### Ver Productos 

Esta pagina nos permite ver los productos los cuales se encuentran hasta el momento almacenados en la base de datos, al precionar sobre los productos se desplega un par de botones los cuales nos permiten hacer `modificaciones` y `eliminar` productos, esta cuenta con una `tabla` para listar los productos la cual se encuentra paginada cada 10 `items`.

### Re-abastecer

Esta funcionalidad es realizada para re-abastecer cuando los productos se estan agotando, esta cuenta con una `tabla` con los productos donde podemos identificar los productos que se estan agotando pues cuando hay menos de 5 en este producto su boton de abastecer se encuentra en color rojo para diferenciar, ademas cuenta con un `boton` para ver solo los productos que estan proximos a agotarse, estos son los que contienen menos de 5 unidades. Al igual que la tabla de ver productos se encuentra paginada cada 10 items, ademas cuenta con un `filtro` de elementos por nombre de productos.

### Vender

Esta opcion cuenta con otro `filtro` de productos para buscar en la `tabla` al agregar los productos son enviados al `carro de compra`, el cual va generando un listado de los productos selecionados, se debe precionar en el boton vendido para `confimar la venta`, las ventas son almacenadas para posteriormente poderse mostrar en el menu `Historial`.

### Historial

Historial es un listado de `ventas finalizadas` las cuales se muestra las ultimas ventas al inicio de la tabla ya que esta lista contiene un boton  de `detalles` de la compra, este al precionar muestra un `modal` el cual contiene la factura, la cual tiene nombre del establecimiento, nit, telefono, numero de factura, datos del cliente y los productos los cuales se vendieron en dicha compra.


