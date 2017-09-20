-- MySQL Workbench Synchronization
-- Generated: 2017-09-19 13:20
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: marcos.defendi

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

CREATE SCHEMA IF NOT EXISTS `ia` DEFAULT CHARACTER SET utf8 ;

CREATE TABLE IF NOT EXISTS `ia`.`course` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `start` DATE NOT NULL,
  `end` DATE NOT NULL,
  `teacher` INT(11) NOT NULL,
  `weight` INT(11) NOT NULL,
  `modality` INT(11) NOT NULL,
  `area` INT(11) NULL DEFAULT NULL,
  `sector` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_course_teacher_idx` (`teacher` ASC),
  INDEX `fk_course_modality1_idx` (`modality` ASC),
  INDEX `fk_course_area1_idx` (`area` ASC),
  INDEX `fk_course_sector1_idx` (`sector` ASC),
  CONSTRAINT `fk_course_teacher`
    FOREIGN KEY (`teacher`)
    REFERENCES `ia`.`teacher` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_modality1`
    FOREIGN KEY (`modality`)
    REFERENCES `ia`.`modality` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_area1`
    FOREIGN KEY (`area`)
    REFERENCES `ia`.`area` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_sector1`
    FOREIGN KEY (`sector`)
    REFERENCES `ia`.`sector` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`sector` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `area` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sector_area1_idx` (`area` ASC),
  CONSTRAINT `fk_sector_area1`
    FOREIGN KEY (`area`)
    REFERENCES `ia`.`area` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`employee` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  `function` VARCHAR(200) NOT NULL,
  `blocked` TINYINT(4) NOT NULL DEFAULT 0,
  `badge` VARCHAR(45) NULL DEFAULT NULL,
  `sector` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_employee_sector1_idx` (`sector` ASC),
  CONSTRAINT `fk_employee_sector1`
    FOREIGN KEY (`sector`)
    REFERENCES `ia`.`sector` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`teacher` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`modality` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `type` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`course_employee` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `employee` INT(11) NOT NULL,
  `course` INT(11) NOT NULL,
  `done` TINYINT(4) NOT NULL,
  `validity` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `employee`, `course`),
  INDEX `fk_course_employee_employee1_idx` (`employee` ASC),
  INDEX `fk_course_employee_course1_idx` (`course` ASC),
  CONSTRAINT `fk_course_employee_employee1`
    FOREIGN KEY (`employee`)
    REFERENCES `ia`.`employee` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_course_employee_course1`
    FOREIGN KEY (`course`)
    REFERENCES `ia`.`course` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

CREATE TABLE IF NOT EXISTS `ia`.`area` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

ALTER TABLE ia.area AUTO_INCREMENT = 1;
ALTER TABLE ia.sector AUTO_INCREMENT = 1;
ALTER TABLE ia.modality AUTO_INCREMENT = 1;
ALTER TABLE ia.employee AUTO_INCREMENT = 1;
ALTER TABLE ia.course AUTO_INCREMENT = 1;
ALTER TABLE ia.course_employee AUTO_INCREMENT = 1;
ALTER TABLE ia.teacher AUTO_INCREMENT = 1;

insert into ia.area(name) values ('Presidência');
insert into ia.area(name) values ('Vice-presidência Médica');
insert into ia.area(name) values ('Vice-presidência Administrativa');
insert into ia.area(name) values ('Grupo de Enfermagem');

insert into ia.sector(name,area) values ('Pesquisa e Pós-Graduação',1);
insert into ia.sector(name,area) values ('Tecnologia da Informação',1);
insert into ia.sector(name,area) values ('Medicina Ocupacional',2);
insert into ia.sector(name,area) values ('Internação Psiquiátrica',2);
insert into ia.sector(name,area) values ('Financeira',3);
insert into ia.sector(name,area) values ('Engenharia e Manutenção',3);
insert into ia.sector(name,area) values ('Enfermagem Clínica',4);
insert into ia.sector(name,area) values ('Enfermagem Cirúrgica',4);

insert into ia.modality(type) values ('Institucional');
insert into ia.modality(type) values ('Setorial');
insert into ia.modality(type) values ('Específico');

insert into ia.employee(name, badge, sector, blocked, function) values('Júlio Souza','12335',1,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Brenda Martins','56782',1,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Bruna Alves','78923',1,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Luana Sousa','12486',1,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Daniel Pinto','78544',1,0,'');

insert into ia.employee(name, badge, sector, blocked, function) values('Felipe Santos','67835',2,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Cauã Melo','46754',2,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Rodrigo Carvalho','21343',2,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Giovanna Cunha','06563',2,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Felipe Rocha','44223',2,0,'');

insert into ia.employee(name, badge, sector, blocked, function) values('Yasmin Fernandes','11111',3,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Marisa Pereira','11112',3,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Renan Correia','11113',3,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Gabrielly Rocha','11114',3,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Vinícius Cardoso','11115',3,0,'');

insert into ia.employee(name, badge, sector, blocked, function) values('Giovanna Melo','22221',4,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Mateus Cunha','22222',4,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Kaua Cunha','22223',4,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Nicole Azevedo','22224',4,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Kauan Pinto','22225',4,0,'');

insert into ia.employee(name, badge, sector, blocked, function) values('Mateus Rodrigues','33331',5,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Mariana Martins','33332',5,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Cauã Rodrigues','33333',5,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Douglas Goncalves','33334',5,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Leonor Costa','33335',5,0,'');

insert into ia.employee(name, badge, sector, blocked, function) values('Paulo Ferreira','44441',6,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Júlia Cardoso','44442',6,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Matilde Souza','44443',6,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Diego Goncalves','44444',6,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Marcos Oliveira','44445',6,0,'');

insert into ia.employee(name, badge, sector, blocked, function) values('Daniel Araujo','55551',7,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Luís Castro','55552',7,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Júlia Ribeiro','55553',7,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Breno Alves','55554',7,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Cauã Almeida','55555',7,0,'');
	
insert into ia.employee(name, badge, sector, blocked, function) values('André Cavalcanti','55556',8,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Victor Almeida','55557',8,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('José Santos','55558',8,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Luis Pinto','55559',8,0,'');
insert into ia.employee(name, badge, sector, blocked, function) values('Letícia Pereira','60000',8,0,'');


insert into ia.teacher(name) values('André Dias');
insert into ia.teacher(name) values('Victor Silva');
insert into ia.teacher(name) values('José Souza');
insert into ia.teacher(name) values('Luis Oliveira');
insert into ia.teacher(name) values('Letícia Alves');

insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Metas Internacionais - Atualização', '2017-01-01', '2017-12-31', 1, 5, 1, 1, 1);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Gestao por Competencias', '2017-01-01', '2017-12-31', 2, 6, 1, 1, 2);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Humanização no Cuidado à Saúde: compromisso de todos!', '2017-01-01', '2017-12-31', 1, 7, 1, 1, 1);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Sedação', '2017-01-01', '2017-12-31', 3, 5, 1, 1, 1);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Incêndio e Outras Emergências - O que fazer?', '2017-01-01', '2017-12-31', 4, 2, 1, 1, 2);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Qualidade e Segurança no Ambiente Hospitalar NÃO ASSISTENCIAL', '2017-01-01', '2017-12-31', 2, 10, 2, 1, 1);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Direitos e Deveres do Paciente - atualização ', '2017-01-01', '2017-12-31', 2, 8, 2, 1, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('META 1 - Identificação do paciente', '2017-01-01', '2017-12-31', 3, 5, 2, 1, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('META 5 - Higiene de Mãos como medida de prevenção ASS', '2017-01-01', '2017-12-31', 5, 8, 2, 2, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Sepse Grave', '2017-01-01', '2017-12-31', 4, 7, 3, 2, 1);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('PFE', '2017-01-01', '2017-12-31', 1, 6, 1, 2, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Processo Transfusional ', '2017-01-01', '2017-12-31',2, 6, 3, 2, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('PRONA', '2017-01-01', '2017-12-31', 3, 4, 3, 2, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Reações Transfusionais ENF', '2017-01-01', '2017-12-31', 3, 6, 3, 2, 7);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Prevenindo Lerdort ', '2017-01-01', '2017-12-31', 5, 8, 2, 2, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Proteção Radiológica Radioterapia e BS - Atualização', '2017-01-01', '2017-12-31', 5, 9, 1, 2, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Proteção Radiológica Manipula Material Radioativo', '2017-01-01', '2017-12-31',3, 9, 3, 2, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Conduta e Integridade - PIBIC', '2017-01-01', '2017-12-31', 3, 9, 3, 3, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Conduta e Integridade no HCPA ', '2017-01-01', '2017-12-31', 2, 1, 2, 3, 2);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Qualidade e Segurança no Ambiente Hospitalar ', '2017-01-01', '2017-12-31', 3, 10, 3, 3, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Direitos e Deveres do Paciente - atualização ', '2017-01-01', '2017-12-31', 3, 10, 2, 3, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Capacitação em Suporte básico de vida - ADULTO', '2017-01-01', '2017-12-31', 2, 2, 1, 3, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Suporte Avançado de vida do Adulto', '2017-01-01', '2017-12-31', 2, 5,3,3, 7);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Qualificação para a Sedação ', '2017-01-01', '2017-12-31', 2, 8, 3, 2, 7);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Cuidados de Quimio e Radio ', '2017-01-01', '2017-12-31', 2, 7, 1, 2, 7);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Fundamentos do Agir - PICCAF ', '2017-01-01', '2017-12-31', 3, 6, 1, 3, 7);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Fundamentos do Agir - JOVEM ', '2017-01-01', '2017-12-31', 1, 8, 1, 4, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Integração Estágio', '2017-01-01', '2017-12-31', 2, 4, 1, 4, 5);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('PCR Básico - Adulto', '2017-01-01', '2017-12-31', 2, 3, 3, 4, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Avaliação da Dor como 5º Sinal Vital ', '2017-01-01', '2017-12-31', 1, 5, 1, 4, 6);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Bomba de Infusão com Equipo ', '2017-01-01', '2017-12-31', 1, 2, 3, 4, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('GEO - RELATORES ', '2017-01-01', '2017-12-31', 1, 2, 1, 4, 5);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Prevenção de úlcera por pressão ', '2017-01-01', '2017-12-31', 1, 6, 3, 4, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Medicamentos Injetáveis ', '2017-01-01', '2017-12-31', 2, 8, 1, 4, 3);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Prontuario do paciente - ADM ', '2017-01-01', '2017-12-31', 2, 9, 1, 1, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Manejo de Resíduos no HCPA - RM E PICCAP ', '2017-01-01', '2017-12-31', 3, 5, 1, 4, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Plano de Gerenciamento para Situações de Emergência', '2017-01-01', '2017-12-31', 1, 2,3, 1, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Ética e Valores Institucionais', '2017-01-01', '2017-12-31', 4, 4, 1, 1, 5);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Mapa de riscos ocupacionais', '2017-01-01', '2017-12-31', 1, 6, 1, 2, 4);
insert into ia.course( name, start, end, teacher, weight, modality, area, sector) values('Prevenção de Infecções Relacionadas à Assistência de Saúde', '2017-01-01', '2017-12-31', 1, 6, 1, 2, 4);