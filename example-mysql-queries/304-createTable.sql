CREATE TABLE User (
  user_id int,
  username char(20) NOT NULL,
  password char(20) NOT NULL,
  type char(50) NOT NULL,
  PRIMARY KEY (user_id),
  UNIQUE (username)
);

CREATE TABLE Client (
  user_id int,
  email char(100) NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE CASCADE,
  UNIQUE (email)
);

CREATE TABLE Staff (
  user_id int,
  name char(100) NOT NULL,
  sid int NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) REFERENCES User (user_id) ON DELETE CASCADE,
  UNIQUE (sid)
);

CREATE TABLE TimePeriod (
  from_date date,
  to_date date,
  discount boolean NOT NULL,
  PRIMARY KEY (from_date, to_date)
);

CREATE TABLE CreditCardInfo (
  name char(50) NOT NULL,
  num char(20),
  company char(50),
  exp_date date NOT NULL,
  PRIMARY KEY (num, company)
);

CREATE TABLE Reservation (
  rid int,
  date date NOT NULL,
  from_date date NOT NULL,
  to_date date NOT NULL,
  card_num char(20) NOT NULL,
  company char(50) NOT NULL,
  user_id int,
  PRIMARY KEY (rid),
  FOREIGN KEY (from_date, to_date) REFERENCES TimePeriod (from_date, to_date) 
    ON DELETE CASCADE,
  FOREIGN KEY (card_num, company) REFERENCES CreditCardInfo (num, company) 
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  FOREIGN KEY (user_id) REFERENCES User (user_id) ON UPDATE CASCADE,
  -- UNIQUE (card_num, company)
);

CREATE TABLE UpdateCancel (
  rid int,
  user_id int,
  PRIMARY KEY (user_id, rid),
  FOREIGN KEY (user_id) REFERENCES Staff (user_id) ON UPDATE CASCADE,
  FOREIGN KEY (rid) REFERENCES Reservation (rid) ON UPDATE CASCADE
);

CREATE TABLE OvernightRoom (
  rid int UNIQUE,
  available boolean,
  room_num char(4),
  price_per_night int,
  type char(50),
  PRIMARY KEY (room_num),
  FOREIGN KEY (rid) REFERENCES Reservation (rid) ON UPDATE CASCADE
);

CREATE TABLE Facility1 (
  rid int UNIQUE,
  available boolean,
  room_num char(5),
  occupancy int,
  price_per_night int,
  type char(50),
  PRIMARY KEY (room_num),
  FOREIGN KEY (rid) REFERENCES Reservation (rid) ON UPDATE CASCADE
);

CREATE TABLE Facility2 (
  rid int,
  room_num char(5),
  PRIMARY KEY (rid),
  FOREIGN KEY (rid) REFERENCES Reservation (rid) ON UPDATE CASCADE
);

CREATE TABLE Facility3 (
  price_per_night int,
  type char(50),
  PRIMARY KEY (type)
);