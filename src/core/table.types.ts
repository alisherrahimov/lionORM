class LionType {
      static boolean: string = "BOOLEAN";
      static date: string = "DATE";
      static float: string = "FLOAT";
      static integer: string = "INTEGER";
      static text: string = "TEXT";

      static varchar(length: number) {
            return `varchar(${length})`;
      }
}

LionType.boolean;

function serial(id: string) {
      return `${id} SERIAL PRIMARY KEY`;
}
serial('id')
