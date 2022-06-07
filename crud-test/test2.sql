-- use mydb;

-- create table users (
-- id int not null auto_increment ,
-- name varchar(255) not null,
-- edad int not null,
-- email varchar(100) not null,
-- primary key (id)
-- );


insert into users (name, edad,email) values("David",23,"david@test.com");
insert into users (name, edad,email) values("Juan",30,"juan@test.com");
insert into users (name, edad,email) values("Luis",21,"luis@test.com");
insert into users (name, edad,email) values("Jhon 117",29,"masthershift@test.com");
insert into users (name, edad,email) values("Marck",3,"david@test.com");

select * from users limit 2;
select * from users where edad<15;
select * from users where edad between 3 and 23;
select * from users where email like "%test%";
select * from users where email like "David%"; -- bucar dentro de correo los elementos que inicien david.......alter

select * from users order by edad asc; -- buscar edades y retornarlas en orden asendente.
select * from users order by edad desc;

select max(edad) as mayor from users;
select min(edad) as mayor from users;

select id, name  from users;
select id as "c.c", name as nombre  from users;

