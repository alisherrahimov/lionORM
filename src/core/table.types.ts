const PRIMARY_KEY = "PRIMARY KEY";
const SERIAL = "SERIAL";
const VARCHAR = (num: number) => `VARCHAR(${num})`;
const INT = "INT";
const TIMESTAMP = "TIMESTAMP";
const TEXT = "TEXT";
const BOOLEAN = "BOOLEAN";
const BIGINT = "BIGINT";
const FLOAT = "FLOAT";
const DOUBLE = "DOUBLE";
const DECIMAL = "DECIMAL";
const UUID = "UUID";
const JSONN = "JSON";
const JSONB = "JSONB";
const ARRAY = "ARRAY";
const ENUM = "ENUM";
const GEOMETRY = "GEOMETRY";
const GEOGRAPHY = "GEOGRAPHY";
const POINT = "POINT";
const DEFAULT = "DEFAULT";
const NOTNULL = "NOT NULL";
const UNIQUE = "UNIQUE";
const CHECK = "CHECK";
const REFERENCES = "REFERENCES";
const ONDELETE = "ON DELETE";
const ONUPDATE = "ON UPDATE";

const DEFAULT_TYPES = {
      FALSE: "FALSE",
      TRUE: "TRUE",
      NULL: "NULL",
      NOW: "NOW()",
      CURRENT_TIMESTAMP: "CURRENT_TIMESTAMP",
      CURRENT_DATE: "CURRENT_DATE",
      CURRENT_TIME: "CURRENT_TIME",
      CURRENT_USER: "CURRENT_USER",
};

const TYPES = {
      SERIAL,
      VARCHAR,
      DEFAULT,
      INT,
      TIMESTAMP,
      TEXT,
      BOOLEAN,
      BIGINT,
      FLOAT,
      DOUBLE,
      DECIMAL,
      UUID,
      JSONN,
      JSONB,
      ARRAY,
      ENUM,
      GEOMETRY,
      GEOGRAPHY,
      POINT,
      PRIMARY_KEY,
};

export { TYPES, DEFAULT_TYPES };
