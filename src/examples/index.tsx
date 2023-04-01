import { Game } from "model/game";

export const players = [
    {
        "id": 1,
        "name": "Lionel Messi",
        "wins": 30,
        "losses": 10,
        "draws": 5,
        "score": 95,
        "attendance": 75
    },
    {
        "id": 2,
        "name": "Cristiano Ronaldo",
        "wins": 25,
        "losses": 12,
        "draws": 8,
        "score": 83,
        "attendance": 75
    },
    {
        "id": 3,
        "name": "Neymar Jr.",
        "wins": 20,
        "losses": 8,
        "draws": 10,
        "score": 70,
        "attendance": 75
    },
    {
        "id": 4,
        "name": "Mohamed Salah",
        "wins": 18,
        "losses": 6,
        "draws": 14,
        "score": 68,
        "attendance": 75
    },
    {
        "id": 5,
        "name": "Robert Lewandowski",
        "wins": 22,
        "losses": 5,
        "draws": 11,
        "score": 77,
        "attendance": 75
    },
    {
        "id": 6,
        "name": "Kevin De Bruyne",
        "wins": 15,
        "losses": 4,
        "draws": 19,
        "score": 64,
        "attendance": 30
    },
    {
        "id": 7,
        "name": "Kylian Mbappé",
        "wins": 23,
        "losses": 3,
        "draws": 12,
        "score": 81,
        "attendance": 75
    },
    {
        "id": 8,
        "name": "Virgil van Dijk",
        "wins": 16,
        "losses": 8,
        "draws": 14,
        "score": 62,
        "attendance": 75
    },
    {
        "id": 9,
        "name": "Sadio Mane",
        "wins": 21,
        "losses": 7,
        "draws": 10,
        "score": 74,
        "attendance": 75
    },
    {
        "id": 10,
        "name": "Sergio Ramos",
        "wins": 19,
        "losses": 9,
        "draws": 10,
        "score": 67,
        "attendance": 90
    },
    {
        "id": 11,
        "name": "Harry Kane",
        "wins": 16,
        "losses": 10,
        "draws": 12,
        "score": 60,
        "attendance": 75
    },
    {
        "id": 12,
        "name": "Jan Oblak",
        "wins": 24,
        "losses": 4,
        "draws": 10,
        "score": 82,
        "attendance": 75
    },
    {
        "id": 13,
        "name": "Manuel Neuer",
        "wins": 20,
        "losses": 5,
        "draws": 13,
        "score": 73,
        "attendance": 34
    },
    {
        "id": 14,
        "name": "Joshua Kimmich",
        "wins": 17,
        "losses": 8,
        "draws": 13,
        "score": 64,
        "attendance": 75
    }]



export const games: Game[] = [
    {
        id: 1,
        lineup: {
            blackPlayers: ["Player 1", "Player 2", "Player 3", "Player 1", "Player 2", "Player 3", "mart Frabka"],
            whitePlayers: ["Player 4", "Player 5", "Player 6","Player 1", "Player 2", "Player 3", "Wojciech Trefon"],
            benchPlayers: ["Player 7", "Player 8", "Player 9"],
        },
        blackTeamGoals: null,
        whiteTeamGoals: null,
        date: "2022-03-20",
    },
    {
        id: 2,
        lineup: {
            blackPlayers: ["Player 10", "Player 11", "Player 12"],
            whitePlayers: ["Player 13", "Player 14", "Player 15"],
            benchPlayers: ["Player 16", "Player 17", "Player 18"],
        },
        blackTeamGoals: 0,
        whiteTeamGoals: 2,
        date: "2022-04-02",
    },
    {
        id: 3,
        lineup: {
            blackPlayers: ["Player 19", "Player 20", "Player 21"],
            whitePlayers: ["Player 22", "Player 23", "Player 24"],
            benchPlayers: ["Player 25", "Player 26", "Player 27"],
        },
        blackTeamGoals: 3,
        whiteTeamGoals: 3,
        date: "2022-05-15",
    },
];