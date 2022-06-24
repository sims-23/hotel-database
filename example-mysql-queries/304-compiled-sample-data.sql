-- ===== User =====

INSERT INTO User 
VALUES (1, 'anna', 'test1', 'client');

INSERT INTO User 
VALUES (2, 'sim', 'test2', 'client');

INSERT INTO User 
VALUES (3, 'kwan', 'test3', 'staff');

INSERT INTO User 
VALUES (4, 'angela', 'test4', 'staff');

INSERT INTO User 
VALUES (5, 'cara', 'test5', 'client');

INSERT INTO User 
VALUES (6, 'joe', 'test6', 'staff');

INSERT INTO User 
VALUES (7, 'ann', 'test7', 'staff');

INSERT INTO User 
VALUES (8, 'tim', 'test8', 'staff');

INSERT INTO User 
VALUES (9, 'jane', 'test9', 'client');

INSERT INTO User 
VALUES (10, 'john', 'test10', 'client');

-- ===== Client =====

INSERT INTO Client
VALUES (1, 'anna@mail.com');

INSERT INTO Client
VALUES (2, 'sim@mail.com');

INSERT INTO Client 
VALUES (5, 'cara@mail.com');

INSERT INTO Client
VALUES (9, 'jane@mail.com');

INSERT INTO Client 
VALUES (10, 'john@mail.com');

-- ===== Staff =====

INSERT INTO Staff
VALUES (3, 'Kwan L', '12345');

INSERT INTO Staff
VALUES (4, 'Angela C', '123456');

INSERT INTO Staff 
VALUES (6, 'Joe M', '1234567');

INSERT INTO Staff
VALUES (7, 'Ann N', '12345678');

INSERT INTO Staff
VALUES (8, 'Tim', '123456789');

-- ===== TimePeriod =====

INSERT INTO TimePeriod
VALUES (STR_TO_DATE('2017,01,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,01,05', '%Y, %m, %d'),
        FALSE);
        
INSERT INTO TimePeriod
VALUES (STR_TO_DATE('2017,04,30', '%Y, %m, %d'), 
		STR_TO_DATE('2017,05,10', '%Y, %m, %d'),
        FALSE);

INSERT INTO TimePeriod
VALUES (STR_TO_DATE('2017,10,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,10,23', '%Y, %m, %d'),
        TRUE);
        
INSERT INTO TimePeriod
VALUES (STR_TO_DATE('2018,03,10', '%Y, %m, %d'), 
		STR_TO_DATE('2018,03,15', '%Y, %m, %d'),
        TRUE);

INSERT INTO TimePeriod
VALUES (STR_TO_DATE('2018,05,03', '%Y, %m, %d'), 
		STR_TO_DATE('2018,05,25', '%Y, %m, %d'),
        FALSE);

-- ===== CreditCardInfo =====

INSERT INTO CreditCardInfo
VALUES ('Anna Z', 
		'1111222233334444',
        'visa',
		STR_TO_DATE('2019,05,25', '%Y, %m, %d'));
        
INSERT INTO CreditCardInfo
VALUES ('Sim S', 
		'1111222233334444',
        'mastercard',
		STR_TO_DATE('2019,05,26', '%Y, %m, %d'));

INSERT INTO CreditCardInfo
VALUES ('Kwan L', 
		'1111222233334445',
        'mastercard',
		STR_TO_DATE('2019,05,27', '%Y, %m, %d'));
        
INSERT INTO CreditCardInfo
VALUES ('Angela C', 
		'1111222233334446',
        'visa',
		STR_TO_DATE('2019,05,28', '%Y, %m, %d'));

INSERT INTO CreditCardInfo
VALUES ('Cara Cara', 
		'1111222233334445',
        'visa',
		STR_TO_DATE('2019,05,29', '%Y, %m, %d'));

-- ===== Reservation =====

INSERT INTO Reservation
VALUES (1, 
		STR_TO_DATE('2016,01,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,01,03', '%Y, %m, %d'),
        STR_TO_DATE('2017,01,05', '%Y, %m, %d'),
        '1111222233334444',
        'visa',
        1);
        
INSERT INTO Reservation
VALUES (2, 
 		STR_TO_DATE('2016,04,30', '%Y, %m, %d'), 
		STR_TO_DATE('2017,04,30', '%Y, %m, %d'),
		STR_TO_DATE('2017,05,10', '%Y, %m, %d'),
		'1111222233334444',
        'mastercard',
        2);

INSERT INTO Reservation
VALUES (3, 
		STR_TO_DATE('2017,09,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,10,03', '%Y, %m, %d'),
		STR_TO_DATE('2017,10,23', '%Y, %m, %d'),
		'1111222233334445',
        'mastercard',
        3);
 
INSERT INTO Reservation
VALUES (4, 
		STR_TO_DATE('2018,02,10', '%Y, %m, %d'), 
        STR_TO_DATE('2018,03,10', '%Y, %m, %d'),
		STR_TO_DATE('2018,03,15', '%Y, %m, %d'),
        '1111222233334446',
        'visa',
        4);
         
INSERT INTO Reservation
VALUES (5, 
		STR_TO_DATE('2018,04,03', '%Y, %m, %d'), 
        STR_TO_DATE('2018,05,03', '%Y, %m, %d'),
        STR_TO_DATE('2018,05,25', '%Y, %m, %d'),
		'1111222233334445',
        'visa',
         5);
         
INSERT INTO Reservation
VALUES (6, 
		STR_TO_DATE('2017,09,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,10,03', '%Y, %m, %d'),
		STR_TO_DATE('2017,10,23', '%Y, %m, %d'),
		'1111222233334445',
        'mastercard',
        3);
        
INSERT INTO Reservation
VALUES (7, 
		STR_TO_DATE('2017,09,03', '%Y, %m, %d'), 
		STR_TO_DATE('2018,03,10', '%Y, %m, %d'),
		STR_TO_DATE('2018,03,15', '%Y, %m, %d'),
		'1111222233334445',
        'mastercard',
        3);
        
INSERT INTO Reservation
VALUES (8, 
		STR_TO_DATE('2017,09,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,10,03', '%Y, %m, %d'),
		STR_TO_DATE('2017,10,23', '%Y, %m, %d'),
		'1111222233334445',
        'mastercard',
        3);
        
INSERT INTO Reservation
VALUES (9, 
		STR_TO_DATE('2017,09,03', '%Y, %m, %d'), 
		STR_TO_DATE('2018,05,03', '%Y, %m, %d'),
        STR_TO_DATE('2018,05,25', '%Y, %m, %d'),
		'1111222233334445',
        'mastercard',
        3);

INSERT INTO Reservation
VALUES (10, 
		STR_TO_DATE('2017,09,03', '%Y, %m, %d'), 
		STR_TO_DATE('2017,10,03', '%Y, %m, %d'),
		STR_TO_DATE('2017,10,23', '%Y, %m, %d'),
		'1111222233334445',
        'mastercard',
        3);

-- ===== UpdateCancel =====

INSERT INTO UpdateCancel
VALUES (1, 3);

INSERT INTO UpdateCancel
VALUES (2, 4);

INSERT INTO UpdateCancel
VALUES (3, 6);

INSERT INTO UpdateCancel
VALUES (4, 7);

INSERT INTO UpdateCancel
VALUES (5, 8);

-- ===== OvernightRoom =====

INSERT INTO OvernightRoom
VALUES (1, FALSE, '1000', 70, 'Single');

INSERT INTO OvernightRoom
VALUES (2, TRUE, '1001', 70, 'Single');

INSERT INTO OvernightRoom
VALUES (3, TRUE, '2001', 100, 'Double');

INSERT INTO OvernightRoom
VALUES (4, FALSE, '2009', 300, 'Deluxe');

INSERT INTO OvernightRoom
VALUES (5, TRUE, '3004', 500, 'King Size');

-- ===== Facility1 =====

INSERT INTO Facility1
VALUES (6, FALSE, '101', 20, 150, 'Meeting Room');

INSERT INTO Facility1
VALUES (7, TRUE, '105', 200, 500, 'Conference Room');

INSERT INTO Facility1
VALUES (8, TRUE, '110', 100, 350, 'Meeting Room 2');

INSERT INTO Facility1
VALUES (9, FALSE, '201', 500, 1000, 'Ballroom');

INSERT INTO Facility1
VALUES (10, TRUE, '203', 30, 1500, 'VIP Room');

-- ===== Facility2 =====

INSERT INTO Facility2
VALUES (6, '101');

INSERT INTO Facility2
VALUES (7, '105');

INSERT INTO Facility2
VALUES (8, '110');

INSERT INTO Facility2
VALUES (9, '201');

INSERT INTO Facility2
VALUES (10, '203');

-- ===== Facility3 =====

INSERT INTO Facility3
VALUES (150, 'Meeting Room');

INSERT INTO Facility3
VALUES (500, 'Conference Room');

INSERT INTO Facility3
VALUES (350, 'Meeting Room 2');

INSERT INTO Facility3
VALUES (1000, 'Ballroom');

INSERT INTO Facility3
VALUES (1500, 'VIP Room');