// Classe Database
class Database {
    constructor(connectionString) {
        if (Database.instance) {
            console.log('Só é possível criar uma conexão');
            return Database.instance;
        }

        this.connectionString = connectionString;
        this.id = Math.random();
        this.queries = [];
        console.log(`Nova conexão criada: ${this.id}`);

        Database.instance = this;
    }
  
    query(sql) {
        this.queries.push(sql);
        console.log(`Executando query [${sql}] na conexão ${this.id}`);
    }

    printQueries() {
        console.log("Histórico de queries: ", this.queries);
    }
  }
  
  // Cliente cria várias conexões (mesmo que não precise)
  const db1 = new Database("db://meu-banco");
  db1.query("SELECT * FROM users");
  
  const db2 = new Database("db://meu-banco");
  db2.query("SELECT * FROM products");

  console.log(db1 == db2)

  db1.printQueries();
  db2.printQueries();