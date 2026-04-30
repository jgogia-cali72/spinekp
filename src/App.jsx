import { useState } from "react";

const DATA = {"Lumbar 360 Fusion 1 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 13, "room": 50.9, "surg": 161.1, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 4, "room": 63.2, "surg": 218.5, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 38.0, "surg": 224.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 16, "room": 55.9, "surg": 189.1, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 1, "room": 63.0, "surg": 176.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 8, "room": 62.8, "surg": 312.2, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 10, "room": 48.0, "surg": 183.5, "center": "Oakland"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 7, "room": 58.9, "surg": 289.9, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 4, "room": 68.2, "surg": 284.2, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 5, "room": 69.0, "surg": 291.6, "center": "Sacramento"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 3, "room": 42.0, "surg": 207.7, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 13, "room": 52.2, "surg": 259.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 14, "room": 57.9, "surg": 194.6, "center": "Oakland"}], "Lumbar 360 Fusion 2 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 16, "room": 63.3, "surg": 242.4, "center": "Oakland"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 12, "room": 65.5, "surg": 328.8, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 6, "room": 58.8, "surg": 334.3, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 2, "room": 66.0, "surg": 232.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 1, "room": 64.0, "surg": 141.0, "center": "Sacramento"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 6, "room": 44.2, "surg": 240.8, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 8, "room": 56.9, "surg": 396.4, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 5, "room": 65.6, "surg": 230.0, "center": "Oakland"}], "Lumbar 360 Fusion 3+ Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 4, "room": 66.5, "surg": 296.5, "center": "Oakland"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 45.0, "surg": 329.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 57.5, "surg": 317.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 2, "room": 53.5, "surg": 409.5, "center": "Oakland"}], "Lumbar Lateral Fusion 1 Level": [{"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 22, "room": 63.2, "surg": 112.8, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 53.0, "surg": 72.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 2, "room": 70.5, "surg": 406.5, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 1, "room": 87.0, "surg": 232.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 9, "room": 62.7, "surg": 206.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 3, "room": 70.7, "surg": 147.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 9, "room": 44.4, "surg": 108.6, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 6, "room": 57.0, "surg": 194.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 23, "room": 75.3, "surg": 176.4, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 15, "room": 69.5, "surg": 156.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 24, "room": 73.2, "surg": 203.1, "center": "Sacramento"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 2, "room": 44.0, "surg": 123.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 4, "room": 62.8, "surg": 255.8, "center": "Oakland"}], "Lumbar Lateral Fusion 2 Level": [{"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 15, "room": 71.4, "surg": 187.5, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 50.0, "surg": 156.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 2, "room": 82.0, "surg": 421.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 2, "room": 73.0, "surg": 231.5, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 3, "room": 39.3, "surg": 162.7, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 6, "room": 63.8, "surg": 268.3, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 6, "room": 79.2, "surg": 251.5, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 3, "room": 70.0, "surg": 322.3, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 4, "room": 72.8, "surg": 229.8, "center": "Sacramento"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 1, "room": 88.0, "surg": 150.0, "center": "Oakland"}], "Lumbar Lateral Fusion 3+ Level": [{"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 16, "room": 68.1, "surg": 204.4, "center": "Sacramento"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 1, "room": 62.0, "surg": 115.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 2, "room": 48.5, "surg": 209.5, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 2, "room": 64.0, "surg": 307.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 6, "room": 76.3, "surg": 207.5, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 1, "room": 61.0, "surg": 298.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 3, "room": 74.3, "surg": 207.3, "center": "Sacramento"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 85.5, "surg": 495.5, "center": "Oakland"}], "Lumbar Posterior Fusion 1 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 11, "room": 61.0, "surg": 180.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 8, "room": 32.5, "surg": 130.2, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 1, "room": 67.0, "surg": 201.0, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 20, "room": 31.6, "surg": 146.8, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 6, "room": 89.2, "surg": 234.5, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 56, "room": 60.9, "surg": 248.1, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 8, "room": 68.8, "surg": 211.6, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 8, "room": 57.5, "surg": 206.1, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 14, "room": 52.3, "surg": 157.4, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 13, "room": 33.1, "surg": 139.8, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 5, "room": 58.6, "surg": 230.8, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 5, "room": 70.4, "surg": 251.4, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 12, "room": 78.8, "surg": 184.8, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 20, "room": 28.8, "surg": 126.6, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 14, "room": 34.4, "surg": 146.3, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 49.0, "surg": 311.0, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 23, "room": 75.0, "surg": 234.5, "center": "Oakland"}], "Lumbar Posterior Fusion 2 Level": [{"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 2, "room": 32.0, "surg": 170.5, "center": "San Jose"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 3, "room": 33.7, "surg": 179.7, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 76.0, "surg": 341.0, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 3, "room": 59.0, "surg": 365.3, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 13, "room": 58.3, "surg": 187.5, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 1, "room": 36.0, "surg": 162.0, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 2, "room": 54.5, "surg": 248.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 4, "room": 31.2, "surg": 170.8, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 12, "room": 37.2, "surg": 216.9, "center": "San Jose"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 2, "room": 82.5, "surg": 399.5, "center": "Oakland"}], "Lumbar Posterior Fusion 3+ Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 62.0, "surg": 335.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 1, "room": 37.0, "surg": 198.0, "center": "San Jose"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 45.0, "surg": 264.0, "center": "San Jose"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 5, "room": 57.4, "surg": 244.2, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 1, "room": 64.0, "surg": 250.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 1, "room": 37.0, "surg": 271.0, "center": "San Jose"}], "PLDF (Posterior Only)": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 2, "room": 63.0, "surg": 146.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 3, "room": 35.0, "surg": 121.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 60.2, "surg": 232.4, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 33.0, "surg": 174.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 85.0, "surg": 135.0, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 3, "room": 57.7, "surg": 265.3, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 1, "room": 42.0, "surg": 354.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 65.0, "surg": 222.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 11, "room": 56.8, "surg": 179.3, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 3, "room": 31.3, "surg": 132.7, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 8, "room": 58.8, "surg": 196.8, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 8, "room": 66.1, "surg": 243.1, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 19, "room": 67.7, "surg": 276.3, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 13, "room": 62.8, "surg": 211.2, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 6, "room": 33.0, "surg": 123.3, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 4, "room": 38.5, "surg": 111.5, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 3, "room": 61.0, "surg": 171.3, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 3, "room": 63.3, "surg": 234.7, "center": "Oakland"}], "Lumbar Revision Fusion": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 55.0, "surg": 225.0, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 3, "room": 59.0, "surg": 191.7, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 42.0, "surg": 259.0, "center": "San Jose"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 2, "room": 79.0, "surg": 238.5, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 57.0, "surg": 378.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 6, "room": 57.2, "surg": 234.7, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 4, "room": 29.2, "surg": 114.8, "center": "San Jose"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 5, "room": 61.0, "surg": 241.6, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 6, "room": 61.5, "surg": 212.3, "center": "Sacramento"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 1, "room": 44.0, "surg": 174.0, "center": "San Jose"}], "Combo TL Fusion": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 7, "room": 76.0, "surg": 409.3, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 70.8, "surg": 294.2, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 36.0, "surg": 167.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 2, "room": 85.5, "surg": 615.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 3, "room": 80.0, "surg": 278.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 5, "room": 73.6, "surg": 468.6, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 15, "room": 68.9, "surg": 277.5, "center": "Sacramento"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 10, "room": 68.1, "surg": 311.2, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 4, "room": 70.2, "surg": 428.2, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 20, "room": 75.8, "surg": 399.2, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 17, "room": 73.9, "surg": 297.4, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 2, "room": 45.0, "surg": 220.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 6, "room": 35.5, "surg": 181.5, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 4, "room": 70.2, "surg": 375.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 3, "room": 91.3, "surg": 301.0, "center": "Oakland"}], "ACDF 1 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 10, "room": 67.9, "surg": 103.6, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 5, "room": 29.0, "surg": 60.8, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 9, "room": 63.4, "surg": 91.4, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 6, "room": 27.3, "surg": 53.5, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 58.0, "surg": 75.0, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 15, "room": 63.7, "surg": 132.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 5, "room": 75.2, "surg": 133.6, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 11, "room": 56.5, "surg": 133.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 2, "room": 59.5, "surg": 118.5, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 7, "room": 29.3, "surg": 58.9, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 13, "room": 48.5, "surg": 105.9, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 15, "room": 68.1, "surg": 100.5, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 13, "room": 59.4, "surg": 152.3, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 17, "room": 55.0, "surg": 103.1, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 13, "room": 26.0, "surg": 54.5, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 12, "room": 34.5, "surg": 74.6, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 4, "room": 56.0, "surg": 174.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 16, "room": 75.6, "surg": 113.4, "center": "Oakland"}], "ACDF 2 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 14, "room": 66.8, "surg": 136.9, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 2, "room": 32.0, "surg": 71.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 64.6, "surg": 138.6, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 14, "room": 31.1, "surg": 73.1, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 5, "room": 66.4, "surg": 179.8, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 10, "room": 66.7, "surg": 213.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 6, "room": 74.5, "surg": 161.5, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 9, "room": 49.9, "surg": 127.2, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 17, "room": 31.1, "surg": 78.5, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 10, "room": 46.8, "surg": 136.5, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 10, "room": 70.5, "surg": 128.5, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 2, "room": 59.0, "surg": 145.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 8, "room": 53.2, "surg": 145.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 6, "room": 27.5, "surg": 73.3, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 5, "room": 30.0, "surg": 88.8, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 8, "room": 61.4, "surg": 168.6, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 14, "room": 71.5, "surg": 127.1, "center": "Oakland"}], "ACDF 3+ Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 3, "room": 76.3, "surg": 170.0, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 4, "room": 63.2, "surg": 153.2, "center": "Sacramento"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 1, "room": 66.0, "surg": 226.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 3, "room": 72.7, "surg": 202.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 75.0, "surg": 428.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 1, "room": 61.0, "surg": 254.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 2, "room": 43.5, "surg": 117.0, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 2, "room": 58.5, "surg": 158.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 1, "room": 64.0, "surg": 162.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 4, "room": 61.2, "surg": 170.2, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 2, "room": 27.0, "surg": 86.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 4, "room": 31.8, "surg": 90.2, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 66.0, "surg": 236.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 1, "room": 71.0, "surg": 250.0, "center": "Oakland"}], "Cervical Disc Replacement (ADR)": [{"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 2, "room": 54.0, "surg": 120.5, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 1, "room": 26.0, "surg": 78.0, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 3, "room": 42.7, "surg": 108.7, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 5, "room": 65.4, "surg": 108.8, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 3, "room": 51.7, "surg": 142.0, "center": "Sacramento"}], "Cervical Corpectomy/ACCF": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 71.0, "surg": 200.0, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 1, "room": 72.0, "surg": 180.0, "center": "Sacramento"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 1, "room": 66.0, "surg": 233.0, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 1, "room": 34.0, "surg": 171.0, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 2, "room": 68.5, "surg": 177.5, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 2, "room": 69.0, "surg": 184.5, "center": "Sacramento"}], "Cervical Posterior Fusion (PSF)": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 8, "room": 80.1, "surg": 185.1, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 2, "room": 40.5, "surg": 93.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 20, "room": 75.4, "surg": 193.0, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 4, "room": 37.8, "surg": 122.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 3, "room": 76.3, "surg": 275.3, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 4, "room": 81.2, "surg": 287.2, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 3, "room": 77.7, "surg": 217.3, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 3, "room": 79.3, "surg": 305.3, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 10, "room": 68.8, "surg": 141.8, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 5, "room": 46.6, "surg": 162.8, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 19, "room": 68.9, "surg": 192.1, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 16, "room": 77.2, "surg": 207.1, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 20, "room": 69.8, "surg": 149.9, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 17, "room": 72.3, "surg": 145.9, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 6, "room": 50.5, "surg": 129.7, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 6, "room": 41.7, "surg": 109.3, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 87.5, "surg": 292.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 4, "room": 90.5, "surg": 238.0, "center": "Oakland"}], "Cervical 360 Fusion (ACDF+PSF)": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 2, "room": 76.0, "surg": 456.5, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 1, "room": 69.0, "surg": 368.0, "center": "Sacramento"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 6, "room": 76.0, "surg": 423.5, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 2, "room": 58.0, "surg": 317.5, "center": "Oakland"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 1, "room": 66.0, "surg": 385.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 3, "room": 69.0, "surg": 375.3, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 1, "room": 62.0, "surg": 337.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 2, "room": 36.5, "surg": 192.5, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 5, "room": 38.8, "surg": 212.6, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 82.5, "surg": 475.0, "center": "Oakland"}], "Occipital/Atlanto-Axial Fusion": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 5, "room": 83.4, "surg": 163.6, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 1, "room": 35.0, "surg": 112.0, "center": "San Jose"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 3, "room": 39.0, "surg": 99.3, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 2, "room": 75.0, "surg": 270.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 2, "room": 83.5, "surg": 175.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 2, "room": 43.0, "surg": 94.5, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 2, "room": 56.0, "surg": 159.5, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 1, "room": 90.0, "surg": 193.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 1, "room": 110.0, "surg": 218.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 2, "room": 87.0, "surg": 271.5, "center": "Sacramento"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 4, "room": 47.5, "surg": 123.2, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 4, "room": 88.8, "surg": 256.8, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 1, "room": 81.0, "surg": 192.0, "center": "Oakland"}], "Thoracic Fusion 1 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 3, "room": 70.7, "surg": 187.3, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 1, "room": 33.0, "surg": 73.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 3, "room": 67.3, "surg": 194.3, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 3, "room": 37.7, "surg": 92.0, "center": "San Jose"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 1, "room": 60.0, "surg": 150.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 2, "room": 68.5, "surg": 130.5, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 2, "room": 36.0, "surg": 104.5, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 1, "room": 61.0, "surg": 217.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 2, "room": 93.5, "surg": 174.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 1, "room": 31.0, "surg": 70.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 1, "room": 89.0, "surg": 310.0, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 3, "room": 73.3, "surg": 186.0, "center": "Oakland"}], "Thoracic Fusion 2 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 68.0, "surg": 178.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 15, "room": 42.0, "surg": 126.4, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 1, "room": 56.0, "surg": 125.0, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 3, "room": 42.0, "surg": 97.7, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 87.0, "surg": 333.0, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 12, "room": 79.2, "surg": 239.2, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 5, "room": 76.8, "surg": 225.2, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 2, "room": 82.0, "surg": 237.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 1, "room": 48.0, "surg": 202.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 5, "room": 39.6, "surg": 117.8, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 5, "room": 64.6, "surg": 212.2, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 4, "room": 74.8, "surg": 216.8, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 3, "room": 63.7, "surg": 193.3, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 4, "room": 36.8, "surg": 131.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 9, "room": 43.9, "surg": 114.8, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 4, "room": 80.5, "surg": 266.8, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 3, "room": 72.3, "surg": 269.3, "center": "Oakland"}], "Thoracic Fusion 3+ Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 4, "room": 76.0, "surg": 239.5, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 3, "room": 38.7, "surg": 134.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 2, "room": 72.0, "surg": 242.5, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 2, "room": 43.5, "surg": 192.5, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 2, "room": 94.5, "surg": 365.0, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 1, "room": 95.0, "surg": 303.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 3, "room": 96.7, "surg": 317.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 119.0, "surg": 241.0, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 6, "room": 34.2, "surg": 160.2, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 2, "room": 67.5, "surg": 231.5, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 3, "room": 77.3, "surg": 339.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 6, "room": 82.7, "surg": 301.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 4, "room": 79.8, "surg": 282.2, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 1, "room": 29.0, "surg": 140.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 2, "room": 42.5, "surg": 142.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 69.5, "surg": 346.5, "center": "Oakland"}], "Lumbar Decompression 1 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 50, "room": 47.8, "surg": 75.7, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 31, "room": 29.1, "surg": 52.5, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 18, "room": 45.2, "surg": 87.0, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 39, "room": 28.5, "surg": 49.8, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 34, "room": 52.2, "surg": 87.3, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 67, "room": 41.1, "surg": 90.7, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 28, "room": 58.5, "surg": 93.8, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 51, "room": 37.5, "surg": 68.4, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 20, "room": 40.3, "surg": 69.6, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 85, "room": 30.1, "surg": 56.6, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 39, "room": 38.3, "surg": 74.8, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 31, "room": 47.5, "surg": 71.6, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 31, "room": 36.2, "surg": 97.8, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 51, "room": 41.6, "surg": 71.2, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 88, "room": 26.9, "surg": 46.4, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 36, "room": 28.4, "surg": 47.7, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 31, "room": 43.3, "surg": 111.5, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 51, "room": 54.0, "surg": 111.8, "center": "Oakland"}], "Lumbar Decompression 2 Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 10, "room": 54.4, "surg": 128.6, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 9, "room": 31.1, "surg": 67.3, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 49.0, "surg": 126.4, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 22, "room": 29.6, "surg": 68.9, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 18, "room": 60.2, "surg": 130.7, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 23, "room": 44.2, "surg": 126.7, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 20, "room": 61.2, "surg": 144.4, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 12, "room": 43.2, "surg": 108.2, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 4, "room": 67.2, "surg": 94.5, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 20, "room": 30.2, "surg": 83.2, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 11, "room": 43.3, "surg": 128.8, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 11, "room": 60.3, "surg": 123.3, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 3, "room": 28.7, "surg": 112.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 16, "room": 41.4, "surg": 102.9, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 36, "room": 28.1, "surg": 67.4, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 25, "room": 29.9, "surg": 70.9, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 24, "room": 46.7, "surg": 174.2, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 10, "room": 63.4, "surg": 169.0, "center": "Oakland"}], "Lumbar Decompression 3+ Level": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 7, "room": 62.6, "surg": 182.9, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 9, "room": 30.9, "surg": 112.9, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 3, "room": 53.3, "surg": 151.7, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 14, "room": 30.6, "surg": 88.9, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 16, "room": 59.4, "surg": 178.3, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 7, "room": 51.9, "surg": 185.3, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 11, "room": 68.4, "surg": 186.8, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 26, "room": 49.3, "surg": 144.5, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 1, "room": 64.0, "surg": 145.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 8, "room": 32.4, "surg": 96.8, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 9, "room": 48.4, "surg": 197.7, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 7, "room": 58.4, "surg": 137.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 10, "room": 41.5, "surg": 138.8, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 3, "room": 37.7, "surg": 108.3, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 6, "room": 29.7, "surg": 107.8, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 17, "room": 29.6, "surg": 94.5, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 19, "room": 50.9, "surg": 245.1, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 8, "room": 57.2, "surg": 225.1, "center": "Oakland"}], "Lumbar Endoscopic Decompression": [{"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 44.8, "surg": 97.2, "center": "Sacramento"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 62, "room": 58.9, "surg": 126.8, "center": "Oakland"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 1, "room": 58.0, "surg": 63.0, "center": "Sacramento"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 41, "room": 54.8, "surg": 166.0, "center": "Oakland"}], "Lumbar Revision Decompression": [{"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 7, "room": 31.6, "surg": 85.7, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 3, "room": 57.7, "surg": 107.7, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 14, "room": 27.3, "surg": 65.6, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 2, "room": 56.0, "surg": 121.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 7, "room": 59.3, "surg": 123.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 2, "room": 40.0, "surg": 68.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 8, "room": 29.2, "surg": 60.9, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 1, "room": 30.0, "surg": 90.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 4, "room": 53.5, "surg": 81.5, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 5, "room": 39.2, "surg": 106.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 3, "room": 42.3, "surg": 123.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 14, "room": 26.1, "surg": 53.9, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 16, "room": 30.3, "surg": 69.2, "center": "San Jose"}], "Cervical Laminoplasty": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 24, "room": 69.5, "surg": 144.6, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 31, "room": 32.9, "surg": 76.5, "center": "San Jose"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 22, "room": 35.4, "surg": 76.6, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 17, "room": 63.9, "surg": 176.1, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 45, "room": 64.2, "surg": 160.6, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 43, "room": 74.9, "surg": 150.2, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 26, "room": 66.4, "surg": 116.3, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 25, "room": 35.4, "surg": 89.5, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 4, "room": 65.2, "surg": 153.2, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 1, "room": 71.0, "surg": 130.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 5, "room": 64.8, "surg": 139.4, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 5, "room": 72.0, "surg": 162.6, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 36, "room": 33.1, "surg": 80.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 24, "room": 36.8, "surg": 87.2, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 38, "room": 62.1, "surg": 160.7, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 28, "room": 74.4, "surg": 158.2, "center": "Oakland"}], "Cervical Laminectomy/Foraminotomy": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 3, "room": 68.7, "surg": 91.7, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 1, "room": 36.0, "surg": 44.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 55.0, "surg": 91.6, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 6, "room": 36.5, "surg": 64.8, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 4, "room": 72.2, "surg": 148.8, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 2, "room": 57.5, "surg": 90.5, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 1, "room": 78.0, "surg": 62.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 92.0, "surg": 173.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 3, "room": 59.0, "surg": 121.0, "center": "Sacramento"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 4, "room": 35.2, "surg": 52.2, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 1, "room": 72.0, "surg": 158.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 2, "room": 82.5, "surg": 82.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 2, "room": 49.0, "surg": 131.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 4, "room": 50.5, "surg": 71.2, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 3, "room": 46.7, "surg": 70.3, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 2, "room": 41.0, "surg": 54.5, "center": "San Jose"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 2, "room": 91.0, "surg": 133.0, "center": "Oakland"}], "Cervical Endoscopic Decompression": [{"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 6, "room": 74.5, "surg": 133.8, "center": "Oakland"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 5, "room": 66.2, "surg": 199.8, "center": "Oakland"}], "Thoracic Decompression": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 60.0, "surg": 177.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 3, "room": 36.0, "surg": 68.7, "center": "San Jose"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 2, "room": 45.5, "surg": 104.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 2, "room": 56.0, "surg": 156.0, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 2, "room": 44.0, "surg": 109.5, "center": "San Jose"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 1, "room": 34.0, "surg": 84.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 1, "room": 26.0, "surg": 47.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 1, "room": 69.0, "surg": 175.0, "center": "Oakland"}], "SI Joint Fusion": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 9, "room": 57.4, "surg": 104.8, "center": "Oakland"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 5, "room": 43.8, "surg": 66.2, "center": "Sacramento"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 3, "room": 41.3, "surg": 172.0, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 3, "room": 56.0, "surg": 119.3, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 4, "room": 59.0, "surg": 103.2, "center": "Sacramento"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 1, "room": 56.0, "surg": 107.0, "center": "Oakland"}], "Hardware Removal": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 6, "room": 55.8, "surg": 108.3, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 1, "room": 28.0, "surg": 57.0, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 1, "room": 42.0, "surg": 38.0, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 2, "room": 31.5, "surg": 47.0, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 42.0, "surg": 88.0, "center": "Oakland"}, {"surgeon": "Huang, Timothy", "abbrev": "Hua", "n": 2, "room": 48.0, "surg": 125.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 1, "room": 60.0, "surg": 142.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 36.0, "surg": 54.0, "center": "Oakland"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 2, "room": 26.0, "surg": 26.5, "center": "San Jose"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 4, "room": 39.2, "surg": 78.8, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 4, "room": 34.0, "surg": 48.2, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 1, "room": 27.0, "surg": 82.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 1, "room": 25.0, "surg": 27.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 39.5, "surg": 86.0, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 1, "room": 92.0, "surg": 103.0, "center": "Oakland"}], "I&D / Wound Care": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 43.0, "surg": 91.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 5, "room": 27.6, "surg": 21.6, "center": "San Jose"}, {"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 4, "room": 43.8, "surg": 63.2, "center": "Sacramento"}, {"surgeon": "Gogia, Jaspaul", "abbrev": "Gog", "n": 5, "room": 26.4, "surg": 26.8, "center": "San Jose"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 68.0, "surg": 119.0, "center": "Oakland"}, {"surgeon": "Kuo, Calvin", "abbrev": "Kuo", "n": 1, "room": 46.0, "surg": 89.0, "center": "Oakland"}, {"surgeon": "Majid, Kamran", "abbrev": "Maj", "n": 1, "room": 50.0, "surg": 68.0, "center": "Oakland"}, {"surgeon": "Mermer, Matthew", "abbrev": "Mer", "n": 4, "room": 49.5, "surg": 65.0, "center": "Sacramento"}, {"surgeon": "Patel, Ravi", "abbrev": "Pat", "n": 6, "room": 40.5, "surg": 63.7, "center": "Sacramento"}, {"surgeon": "Ratnayake, Ruwan", "abbrev": "Rat", "n": 2, "room": 46.0, "surg": 48.0, "center": "Sacramento"}, {"surgeon": "Salari, Pooria", "abbrev": "Sal", "n": 2, "room": 41.5, "surg": 68.0, "center": "Sacramento"}, {"surgeon": "Sinatra, Philip", "abbrev": "Sin", "n": 2, "room": 49.0, "surg": 60.0, "center": "Sacramento"}, {"surgeon": "Spisak, Steven", "abbrev": "Spi", "n": 3, "room": 24.0, "surg": 35.0, "center": "San Jose"}, {"surgeon": "Suen, Patrick", "abbrev": "Sue", "n": 5, "room": 27.0, "surg": 34.6, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 6, "room": 43.0, "surg": 73.8, "center": "Oakland"}, {"surgeon": "Yacob, Alem", "abbrev": "Yac", "n": 4, "room": 54.8, "surg": 99.5, "center": "Oakland"}], "Coccygectomy": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 3, "room": 46.0, "surg": 40.3, "center": "Oakland"}, {"surgeon": "Gorek, Josef", "abbrev": "Gor", "n": 1, "room": 59.0, "surg": 62.0, "center": "Oakland"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 1, "room": 37.0, "surg": 84.0, "center": "Oakland"}], "Lumbar Disc Replacement (ADR)": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 7, "room": 62.1, "surg": 154.6, "center": "Oakland"}], "Vertebroplasty": [{"surgeon": "Fennessy, Jacob", "abbrev": "Fen", "n": 1, "room": 34.0, "surg": 49.0, "center": "Sacramento"}], "Other": [{"surgeon": "Bains, Ravinder-Raj", "abbrev": "Bai", "n": 1, "room": 39.0, "surg": 35.0, "center": "Oakland"}, {"surgeon": "Carlisle, Elliot", "abbrev": "Car", "n": 1, "room": 40.0, "surg": 52.0, "center": "San Jose"}, {"surgeon": "Pahlavan, Sohrab", "abbrev": "Pah", "n": 1, "room": 30.0, "surg": 45.0, "center": "San Jose"}, {"surgeon": "Tabaraee, Ehsan", "abbrev": "Tab", "n": 2, "room": 44.0, "surg": 85.0, "center": "Oakland"}]};

const HIERARCHY = [
  {t:"section",l:"FUSION"},
  {t:"group",l:"Lumbar",i:1},
  {t:"group",l:"360 Ant/Post",i:2},
  {t:"leaf",l:"1 Level",k:"Lumbar 360 Fusion 1 Level",i:3},
  {t:"leaf",l:"2 Level",k:"Lumbar 360 Fusion 2 Level",i:3},
  {t:"leaf",l:"3+ Levels",k:"Lumbar 360 Fusion 3+ Level",i:3},
  {t:"group",l:"Lateral",i:2},
  {t:"leaf",l:"1 Level",k:"Lumbar Lateral Fusion 1 Level",i:3},
  {t:"leaf",l:"2 Level",k:"Lumbar Lateral Fusion 2 Level",i:3},
  {t:"leaf",l:"3+ Levels",k:"Lumbar Lateral Fusion 3+ Level",i:3},
  {t:"group",l:"Posterior (PLIF/TLIF)",i:2},
  {t:"leaf",l:"1 Level",k:"Lumbar Posterior Fusion 1 Level",i:3},
  {t:"leaf",l:"2 Level",k:"Lumbar Posterior Fusion 2 Level",i:3},
  {t:"leaf",l:"3+ Levels",k:"Lumbar Posterior Fusion 3+ Level",i:3},
  {t:"leaf",l:"PLDF (Posterior Only)",k:"PLDF (Posterior Only)",i:2},
  {t:"leaf",l:"Revision Fusion",k:"Lumbar Revision Fusion",i:2},
  {t:"leaf",l:"Combo TL",k:"Combo TL Fusion",i:2},
  {t:"group",l:"Cervical",i:1},
  {t:"group",l:"Anterior (ACDF)",i:2},
  {t:"leaf",l:"1 Level",k:"ACDF 1 Level",i:3},
  {t:"leaf",l:"2 Level",k:"ACDF 2 Level",i:3},
  {t:"leaf",l:"3+ Levels",k:"ACDF 3+ Level",i:3},
  {t:"leaf",l:"ADR",k:"Cervical Disc Replacement (ADR)",i:2},
  {t:"leaf",l:"Corpectomy/ACCF",k:"Cervical Corpectomy/ACCF",i:2},
  {t:"leaf",l:"Posterior PSF",k:"Cervical Posterior Fusion (PSF)",i:2},
  {t:"leaf",l:"Cervical 360",k:"Cervical 360 Fusion (ACDF+PSF)",i:2},
  {t:"leaf",l:"Occipital/Atlanto-Axial",k:"Occipital/Atlanto-Axial Fusion",i:2},
  {t:"group",l:"Thoracic",i:1},
  {t:"group",l:"Posterior",i:2},
  {t:"leaf",l:"1 Level",k:"Thoracic Fusion 1 Level",i:3},
  {t:"leaf",l:"2 Level",k:"Thoracic Fusion 2 Level",i:3},
  {t:"leaf",l:"3+ Levels",k:"Thoracic Fusion 3+ Level",i:3},
  {t:"spacer"},
  {t:"section",l:"DECOMPRESSION"},
  {t:"group",l:"Lumbar",i:1},
  {t:"group",l:"Open",i:2},
  {t:"leaf",l:"1 Level",k:"Lumbar Decompression 1 Level",i:3},
  {t:"leaf",l:"2 Level",k:"Lumbar Decompression 2 Level",i:3},
  {t:"leaf",l:"3+ Levels",k:"Lumbar Decompression 3+ Level",i:3},
  {t:"leaf",l:"Endoscopic",k:"Lumbar Endoscopic Decompression",i:2},
  {t:"leaf",l:"Revision",k:"Lumbar Revision Decompression",i:2},
  {t:"group",l:"Cervical",i:1},
  {t:"leaf",l:"Laminoplasty",k:"Cervical Laminoplasty",i:2},
  {t:"leaf",l:"Laminectomy/Foraminotomy",k:"Cervical Laminectomy/Foraminotomy",i:2},
  {t:"leaf",l:"Endoscopic",k:"Cervical Endoscopic Decompression",i:2},
  {t:"group",l:"Thoracic",i:1},
  {t:"leaf",l:"Thoracic Decompression",k:"Thoracic Decompression",i:2},
  {t:"spacer"},
  {t:"section",l:"OTHER"},
  {t:"leaf",l:"SI Joint Fusion",k:"SI Joint Fusion",i:1},
  {t:"leaf",l:"Hardware Removal",k:"Hardware Removal",i:1},
  {t:"leaf",l:"I&D / Wound Care",k:"I&D / Wound Care",i:1},
  {t:"leaf",l:"Coccygectomy",k:"Coccygectomy",i:1},
  {t:"leaf",l:"Lumbar Disc Replacement",k:"Lumbar Disc Replacement (ADR)",i:1},
  {t:"leaf",l:"Vertebroplasty",k:"Vertebroplasty",i:1},
  {t:"leaf",l:"Other",k:"Other",i:1},
];

const CC = {
  "San Jose":   { room:"#1a3a5c", surg:"#5b8db8", label:"SJO" },
  "Oakland":    { room:"#1a3d1a", surg:"#5a9e5a", label:"OAK" },
  "Sacramento": { room:"#5c1a1a", surg:"#b85b5b", label:"SAC" },
};
const CENTERS = ["San Jose","Oakland","Sacramento"];

function wavg(rows) {
  if (!rows.length) return null;
  const vals = rows.filter(d => d.room != null && d.surg != null);
  if (!vals.length) return null;
  const totalN = vals.reduce((s,d)=>s+d.n, 0);
  return {
    room: Math.round(vals.reduce((s,d)=>s+d.room*d.n,0)/totalN * 10)/10,
    surg: Math.round(vals.reduce((s,d)=>s+d.surg*d.n,0)/totalN * 10)/10,
    n: totalN,
  };
}

function getCenterAvgs(key) {
  if (!DATA[key]) return [];
  return CENTERS.map(ctr => {
    const rows = DATA[key].filter(d => d.center === ctr);
    const w = wavg(rows);
    if (!w) return null;
    return { surgeon: ctr+" Avg", abbrev: CC[ctr].label, n: w.n, room: w.room, surg: w.surg, center: ctr, isAvg: true };
  }).filter(Boolean);
}

function Tooltip({ data, pos }) {
  if (!data) return null;
  const c = CC[data.center];
  return (
    <div style={{
      position:"fixed", left:pos.x+14, top:pos.y-12, zIndex:9999,
      background:"rgba(8,8,16,0.97)", border:"1px solid rgba(255,255,255,0.18)",
      borderRadius:10, padding:"12px 16px", pointerEvents:"none",
      boxShadow:"0 12px 40px rgba(0,0,0,0.6)",
      fontFamily:"'Courier New',monospace", fontSize:13, color:"#f8f8f8", minWidth:200,
    }}>
      <div style={{fontWeight:700,fontSize:15,marginBottom:5,color:"#fff"}}>
        {data.isAvg ? data.surgeon : data.surgeon.split(",")[0]}
      </div>
      <div style={{color:"#888",fontSize:11,marginBottom:10}}>
        {data.isAvg ? "Center Average" : data.center} · n={data.n}
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
        <span style={{display:"inline-block",width:11,height:11,borderRadius:2,background:c.room}}/>
        <span style={{color:"#ccc"}}>Room → Incision</span>
        <span style={{marginLeft:"auto",fontWeight:700,color:"#fff"}}>{data.room.toFixed(1)} min</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
        <span style={{display:"inline-block",width:11,height:11,borderRadius:2,background:c.surg}}/>
        <span style={{color:"#ccc"}}>Surgical Time</span>
        <span style={{marginLeft:"auto",fontWeight:700,color:"#fff"}}>{data.surg.toFixed(1)} min</span>
      </div>
      <div style={{borderTop:"1px solid rgba(255,255,255,0.12)",paddingTop:7,display:"flex",justifyContent:"space-between"}}>
        <span style={{color:"#888"}}>Total</span>
        <span style={{fontWeight:700,fontSize:14,color:"#fff"}}>{(data.room+data.surg).toFixed(1)} min</span>
      </div>
    </div>
  );
}

function Chart({ caseKey }) {
  const [tooltip, setTooltip] = useState(null);
  const [ttPos, setTtPos] = useState({x:0,y:0});

  if (!caseKey || !DATA[caseKey]) return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",
      color:"#444",fontFamily:"'Courier New',monospace",fontSize:14}}>
      Select a procedure from the left panel
    </div>
  );

  const raw = DATA[caseKey].filter(d => d.room!=null && d.surg!=null);
  const sorted = [...raw].sort((a,b)=>(a.room+a.surg)-(b.room+b.surg));
  const centerAvgs = getCenterAvgs(caseKey);
  const allBars = [...sorted, null, ...centerAvgs];

  const maxVal = Math.max(...[...sorted,...centerAvgs].map(d=>d.room+d.surg));
  const yMax = Math.ceil(maxVal/50)*50 + 30;
  const BW=46, GAP=13, SEP=32, PL=60, PB=44, PT=32, PR=28;

  let totalW = PL;
  allBars.forEach(b => { totalW += b===null ? SEP : BW+GAP; });
  totalW += PR;

  const H=430; const PH=H-PB-PT;
  const sc = v => PH*v/yMax;
  const yTicks = [];
  for (let t=0; t<=yMax; t+=50) yTicks.push(t);

  let xPos = PL;
  const barPositions = allBars.map(b => {
    if (b === null) { const x=xPos; xPos+=SEP; return {isSep:true, x}; }
    const x=xPos; xPos+=BW+GAP; return {isSep:false, x, d:b};
  });

  return (
    <div style={{padding:"8px 0 0 0"}}>
      <div style={{fontFamily:"'Courier New',monospace",fontSize:11,color:"#555",
        marginBottom:14,paddingLeft:PL}}>
        sorted ascending by total · hover for details · right group = center averages (case-weighted)
      </div>
      <svg width={totalW} height={H} style={{overflow:"visible"}}>
        {yTicks.map(t => {
          const y = PT+PH-sc(t);
          return (
            <g key={t}>
              <line x1={PL} x2={totalW-PR} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth={1}/>
              <text x={PL-10} y={y+5} textAnchor="end" fill="#666" fontSize={11}
                fontFamily="Courier New,monospace">{t}</text>
            </g>
          );
        })}
        <text x={16} y={PT+PH/2} textAnchor="middle" fill="#555" fontSize={11}
          fontFamily="Courier New,monospace"
          transform={`rotate(-90,16,${PT+PH/2})`}>minutes</text>

        {barPositions.map((bp, i) => {
          if (bp.isSep) return (
            <line key="sep" x1={bp.x+SEP/2} x2={bp.x+SEP/2} y1={PT} y2={PT+PH+10}
              stroke="rgba(255,255,255,0.14)" strokeWidth={1} strokeDasharray="4,3"/>
          );
          const {x, d} = bp;
          const rh=sc(d.room), sh=sc(d.surg), th=rh+sh;
          const c=CC[d.center];
          return (
            <g key={d.surgeon+i} style={{cursor:"pointer"}}
              onMouseMove={e=>{setTooltip(d);setTtPos({x:e.clientX,y:e.clientY});}}
              onMouseLeave={()=>setTooltip(null)}>
              <rect x={x} y={PT+PH-th} width={BW} height={sh} fill={c.surg}
                rx={d.isAvg?0:3} ry={d.isAvg?0:3}/>
              <rect x={x} y={PT+PH-rh} width={BW} height={rh} fill={c.room}/>
              {d.isAvg && <rect x={x} y={PT+PH-th} width={BW} height={th}
                fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth={1.5}/>}
              <text x={x+BW/2} y={PT+PH+16} textAnchor="middle"
                fill={d.isAvg?"#eee":"#999"} fontSize={d.isAvg?12:11}
                fontWeight={d.isAvg?"700":"400"}
                fontFamily="Courier New,monospace">{d.abbrev}</text>
              <text x={x+BW/2} y={PT+PH-th-7} textAnchor="middle"
                fill={d.isAvg?"#aaa":"#555"} fontSize={d.isAvg?10:9}
                fontFamily="Courier New,monospace">{d.isAvg?"avg":"n="+d.n}</text>
            </g>
          );
        })}
        <line x1={PL} x2={totalW-PR} y1={PT+PH} y2={PT+PH}
          stroke="rgba(255,255,255,0.15)" strokeWidth={1}/>
      </svg>

      <div style={{display:"flex",gap:24,paddingLeft:PL,marginTop:10,flexWrap:"wrap",alignItems:"center"}}>
        {CENTERS.map(ctr=>(
          <div key={ctr} style={{display:"flex",alignItems:"center",gap:7}}>
            <div style={{display:"flex",flexDirection:"column",gap:2}}>
              <div style={{width:18,height:6,background:CC[ctr].room,borderRadius:1}}/>
              <div style={{width:18,height:6,background:CC[ctr].surg,borderRadius:1}}/>
            </div>
            <span style={{fontFamily:"'Courier New',monospace",fontSize:12,color:"#ccc"}}>{ctr}</span>
          </div>
        ))}
        <span style={{fontFamily:"'Courier New',monospace",fontSize:11,color:"#555",marginLeft:8}}>
          dark = room→incision · light = surgical time · outlined = center avg
        </span>
      </div>
      <Tooltip data={tooltip} pos={ttPos}/>
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState("ACDF 1 Level");
  const totalN = k => (DATA[k]||[]).reduce((s,d)=>s+d.n,0);
  const found = HIERARCHY.find(h=>h.k===selected);

  return (
    <div style={{
      display:"flex", height:"100vh", background:"#080810",
      fontFamily:"'Courier New',monospace",
    }}>
      <div style={{
        width:258, flexShrink:0, borderRight:"1px solid rgba(255,255,255,0.07)",
        overflowY:"auto",
      }}>
        <div style={{padding:"20px 16px 14px",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
          <div style={{color:"#ffffff",fontSize:14,fontWeight:700,letterSpacing:"0.08em",marginBottom:4}}>
            SPINE OR EFFICIENCY
          </div>
          <div style={{color:"#666",fontSize:11}}>2025 · Click a procedure</div>
        </div>

        {HIERARCHY.map((item,i)=>{
          if(item.t==="spacer") return <div key={i} style={{height:8}}/>;
          if(item.t==="section") return (
            <div key={i} style={{padding:"10px 16px 4px",color:"#555",fontSize:9,
              fontWeight:700,letterSpacing:"0.18em",textTransform:"uppercase",marginTop:4}}>
              {item.l}
            </div>
          );
          if(item.t==="group") return (
            <div key={i} style={{
              padding:`3px 16px 3px ${16+(item.i-1)*12}px`,
              color:"#555",fontSize:11,
            }}>{item.l}</div>
          );
          const isActive = selected===item.k;
          const n = totalN(item.k);
          return (
            <button key={i} onClick={()=>setSelected(item.k)}
              style={{
                display:"flex",alignItems:"center",justifyContent:"space-between",
                width:"100%",textAlign:"left",border:"none",cursor:"pointer",
                padding:`6px 12px 6px ${16+(item.i-1)*12}px`,
                background:isActive?"rgba(255,255,255,0.09)":"transparent",
                borderLeft:isActive?"2px solid #6b9fd4":"2px solid transparent",
                transition:"all 0.1s",
              }}
              onMouseEnter={e=>{ if(!isActive) e.currentTarget.style.background="rgba(255,255,255,0.04)"; }}
              onMouseLeave={e=>{ if(!isActive) e.currentTarget.style.background="transparent"; }}
            >
              <span style={{color:isActive?"#ffffff":"#888",fontSize:12}}>{item.l}</span>
              {n>0 && <span style={{color:"#444",fontSize:10,marginLeft:4}}>{n}</span>}
            </button>
          );
        })}
      </div>

      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"}}>
        <div style={{
          padding:"20px 32px 16px",borderBottom:"1px solid rgba(255,255,255,0.07)",
          display:"flex",alignItems:"baseline",gap:14,
        }}>
          <span style={{color:"#ffffff",fontSize:18,fontWeight:700}}>
            {found?.l || selected}
          </span>
          {selected && DATA[selected] && (
            <span style={{color:"#666",fontSize:12}}>
              {DATA[selected].filter(d=>d.room!=null).length} surgeons &nbsp;·&nbsp; {totalN(selected)} cases
            </span>
          )}
        </div>
        <div style={{flex:1,overflowX:"auto",overflowY:"hidden",padding:"20px 32px"}}>
          <Chart caseKey={selected}/>
        </div>
      </div>
    </div>
  );
}
