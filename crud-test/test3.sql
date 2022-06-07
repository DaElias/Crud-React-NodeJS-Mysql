-- create table products(
-- 	id int not null auto_increment,
--     name varchar(100) not null,
--     create_by int not null,
--     marca varchar(50) not null,
--     primary key (id),
-- 	foreign key (create_by) references users(id)
-- );

rename table produt to product;-- 


insert into product (name, marca, create_by) 
values ("ipad pro 2022", "Apple", 1),
 ("iPhone 13 pro max", "Apple", 1),
 ("Apple Watch 2022", "Apple", 2),
 ("iMac pro 2022", "Apple", 4),
 ("MacBook pro 2022", "Apple", 3);
 
 
 select * from product;
 
 select u.id, u.email from users u;
 -- Left Join
 select u.id, u.email,p.name from users u left join product p on u.id = p.create_by;
 -- Right Join
  select u.id, u.email,p.name from users u right join product p on u.id = p.create_by;
-- Inner Join
select u.id, u.email,p.name from users u inner join product p on u.id = p.create_by;
-- -- Cross Join
-- select u.id, u.name, p.name from users u cross join product p;  

select count(p.id), u.name from product p left join users u 
on u.id = p.create_by group by p.create_by;

select count(p.id), u.name from product p left join users u 
on u.id = p.create_by group by p.create_by having count(p.id)>= 2;

-- drop table animales;

 