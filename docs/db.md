---
title: Databases
subtitle: MySQL or mongoDB?
date: 2019-09-26
tags:
- revision
- database
- sql
---

# Databases
## Relational versus non-relational databases
| SQL (relational) | NoSQL (non-relational) |
| ----------------- | ----------------------------------------------------------- |
| Tables / schema | Humongous data, collections, documents, duplication of data |
| Structured | Semi/no structure, flexible |
| Relations | Less dependence on relations, quick reads |
| Atomic | Eventually consistent |
| Monolithic | Distributed |

## Scaling
- Horizontal: add more servers, difficult for SQL (cannot split relational databases)
- Vertical: add more resources

## Considerations
- Consistency versus scale
- Internal versus public

## SQL -- "Structured Query Language"
Relational databases are "Excel on steroids"

- MySql
- Oracle
- Sqlite
- Postgres
- MS-SQL
- Amazon Aurora (part of RDS)

### PostgreSQL -- AKA Postgres
- psql
- pgAdmin
- MVCC -- Multiversion concurrency control
- Non-blocking indexes
- Partial indexes
- Normalisation
- ACID
- JSONB

### Examples

```sql
SELECT -- id, name, price -- FROM -- product
SELECT -- fields -- FROM -- table
```

### Commands
- INSERT
- JOIN

Every new row has the same fields: schema.

## NoSQL - Not only SQL
- Two processes ensure that the distributed databases remain up-to-date and
current: replication and duplication

### mongoDB
mongoDB comes form "humongous". Instead of tables we have collections which
contain documents -- looks a bit like JSON. Each document can use a different
structure (schema). Generally there are no relations.

Less relation merging therefore fast queries. At the expense of duplication of
data.

- Schema-less
- Big data
- Clusters
- Real time web applications
- Mongo shell
- [BSON -- Binary JSON](https://en.wikipedia.org/wiki/BSON)
- [Sharding -- horizontal partitioning](https://en.wikipedia.org/wiki/Shard_(database_architecture))

### Types of NoSQL database
- Document database ([mongoDB](https://en.wikipedia.org/wiki/MongoDB), CouchDB)
- Column databases (Apache Cassadra)
- Key-value (Redis, [Couchbase Server](https://en.wikipedia.org/wiki/Couchbase_Server))
- Cache system (Redis, Memcached)
- Graph DB ([Neo4J](https://en.wikipedia.org/wiki/Neo4j))

## ACID
- Atomicity
- Consistency
- Isolation
- Durability

## References
- [SQL v NoSQL on YouTube](https://www.youtube.com/watch?v=ZS_kXvOeQ5Y)
- [NoSQL](https://en.wikipedia.org/wiki/NoSQL)
- [ACID](https://en.wikipedia.org/wiki/ACID_(computer_science))
- [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem)
- [Distributed database](https://en.wikipedia.org/wiki/Distributed_database)
- [MapReduce](https://en.wikipedia.org/wiki/MapReduce)
- [Shared-nothing_architecture](https://en.wikipedia.org/wiki/Shared-nothing_architecture)
- [Byzantine_fault](https://en.wikipedia.org/wiki/Byzantine_fault)
- [Comparison of relational and non-relational on Pluralsight](https://app.pluralsight.com/player?course=understanding-nosql&author=andrew-brust&name=understanding-nosql-m5-both&clip=1&mode=live)
- https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping

