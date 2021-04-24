create database RA1;

use RA1;

create table Candidates (
id int auto_increment not null primary key,
candidate_name varchar(30) not null,
candidate_email varchar(40) not null,
candidate_mbl int not null
);

insert into Candidates (id,candidate_name,candidate_email,candidate_mbl) values ('1','Bhuvana','bhuvana@gmail.com',9876210);
insert into Candidates (candidate_name,candidate_email,candidate_mbl) values ('Dhanu','dhanu@gmail.com',98680);
insert into Candidates (candidate_name,candidate_email,candidate_mbl) values ('Jaanu','jaanu@gmail.com',978613);

select * from Candidates;

create table Trainee (
id int auto_increment not null primary key,
department varchar(30) not null,
salary int not null
);

insert into Trainee (id,department,salary) values ('1','IT','25000');
insert into Trainee (department,salary) values ('Mechanical','23000');
insert into Trainee (department,salary) values ('electrical','24000');

select * from Trainee;

create table Employees (
id int auto_increment not null primary key,
employee_name varchar(30) not null,
employee_email varchar(40) not null,
employee_mbl int not null
);

insert into Employees (id,employee_name,employee_email,employee_mbl) values ('1','Ram','ram@gmail.com',98210);
insert into Employees (id,employee_name,employee_email,employee_mbl) values ('2','Krish','krish@gmail.com',98180);
insert into Employees (id,employee_name,employee_email,employee_mbl) values ('3','Vinayak','vinayak@gmail.com',97213);

select * from Employees;
