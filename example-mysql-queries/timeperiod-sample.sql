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