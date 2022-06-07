use mydb;
create table animales(
	id int,
    tipo varchar(255),
    estado varchar(255),
    primary key (id)
);

-- insert into animales (tipo,estado) values("cerdo", "feliz");


alter table animales modify column id int auto_increment;


show create table animales;

CREATE TABLE `animales` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(255) DEFAULT NULL,
  `estado` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);
insert into animales (tipo,estado) values("perro", "feliz");
insert into animales (tipo,estado) values("messi", "feliz");
insert into animales (tipo,estado) values("cr7", "triste");
select * from animales;
select * from animales where id=1;
select * from animales where estado="triste" and tipo="cr7";

update animales set estado="normal" where id="1"; 

delete from animales where estado="feliz";
-- Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. 
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
delete from animales where id=1;

