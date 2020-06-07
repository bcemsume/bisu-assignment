Create Database biSU;
USE biSU;

CREATE TABLE `orders` (
  `orderId` int NOT NULL,
  `subscriptionId` text,
  `deliveryDate` datetime DEFAULT NULL,
  `paymentMethod` text,
  `products` json DEFAULT NULL,
  `totalAmount` double DEFAULT NULL,
  `status` text,
  PRIMARY KEY (`orderId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `orders` (`orderId`, `subscriptionId`, `deliveryDate`, `paymentMethod`, `products`, `totalAmount`, `status`) VALUES
('1', 'abc123', '2017-05-02 00:13:00', 'BKM', '[{\"product\": \"19 lt damanaca\", \"quantity\": 1}]', '10', 'NEW'),
('2', 'abc123', '2017-04-23 20:05:00', 'MASTERPASS', '[{\"product\": \"19 lt damanaca\", \"quantity\": 1}, {\"product\": \"10 lt pet\", \"quantity\": 2}]', '24', 'CONFIRMED'),
('3', 'abc123', '2017-03-31 16:35:00', 'PAYATDOOR', '[{\"product\": \"19 lt damanaca\", \"quantity\": 2}]', '12', 'CANCELED'),
('4', 'abc125', '2017-03-29 11:19:00', 'PAYATDOOR', '[{\"product\": \"19 lt damanaca\", \"quantity\": 3}]', '36', 'COMPLETED'),
('5', 'abc125', '2017-03-23 17:59:00', 'BKM', '[{\"product\": \"5 lt pet\", \"quantity\": 2}]', '15', 'CONFIRMED'),
('6', 'abc126', '2017-03-09 19:02:00', 'MASTERPASS', '[{\"product\": \"19 lt damanaca\", \"quantity\": 1}, {\"product\": \"5 lt pet\", \"quantity\": 3}]', '32.5', 'CANCELED');


CREATE TABLE `subscriptions` (
  `subscriptionId` varchar(255) NOT NULL,
  `fullname` text,
  `address` text,
  `locationName` text,
  `subCityName` text,
  `cityName` text,
  `brand` text,
  `phoneNumber` text,
  `distributorNumber` text,
  PRIMARY KEY (`subscriptionId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `subscriptions` (`subscriptionId`, `fullname`, `address`, `locationName`, `subCityName`, `cityName`, `brand`, `phoneNumber`, `distributorNumber`) VALUES
('abc123', 'Utku', 'sair nefi sokak', 'caferaga', 'kadiköy', 'istanbul', 'hayat', '5332858530', '2161000000'),
('abc124', 'Utku', 'sair nefi sokak', 'caferaga', 'kadiköy', 'istanbul', 'sirma', '5332858530', '2161000004'),
('abc125', 'Ozan', 'bahariye sokak', 'caddebostan', 'kadiköy', 'istanbul', 'erikli', '5331533630', '2161000001'),
('abc126', 'Ergin', 'moda caddesi', 'göztepe', 'kadiköy', 'istanbul', 'sirma', '5332858530', '2161000002');
