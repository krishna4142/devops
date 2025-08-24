const quizData = {
  1: [
    { question: "1. What is JVM in Java?", options: ["Java Virtual Machine","Java Verified Machine","Java Variable Method","None"], answer: "Java Virtual Machine" },
    { question: "2. Which keyword is used to inherit a class in Java?", options: ["implement","extends","inherits","super"], answer: "extends" },
    { question: "3. What is the default value of int in Java?", options: ["0","null","undefined","1"], answer: "0" },
    { question: "4. Which method is the entry point of a Java program?", options: ["main()","start()","run()","init()"], answer: "main()" },
    { question: "5. What is the size of int in Java?", options: ["8 bits","16 bits","32 bits","64 bits"], answer: "32 bits" }
  ],
  2: [
    { question: "1. Which class is immutable in Java?", options: ["String","StringBuilder","StringBuffer","CharArray"], answer: "String" },
    { question: "2. What is the index of first element in Java arrays?", options: ["0","1","-1","Depends on JVM"], answer: "0" },
    { question: "3. Which method is used to get length of an array?", options: ["size()","length","length()","getSize()"], answer: "length" },
    { question: "4. Which operator is used for concatenation in Java?", options: ["+","&",".","*"], answer: "+" },
    { question: "5. What is the default value of a String reference?", options: ["null","\"\"","0","undefined"], answer: "null" }
  ],
  3: [
    { question: "1. Which keyword is used to handle exceptions in Java?", options: ["try","catch","throw","All of these"], answer: "All of these" },
    { question: "2. Which exception is unchecked in Java?", options: ["IOException","SQLException","NullPointerException","ClassNotFoundException"], answer: "NullPointerException" },
    { question: "3. Which block always executes?", options: ["try","catch","finally","throw"], answer: "finally" },
    { question: "4. Which keyword is used to declare custom exceptions?", options: ["exception","throw","throws","raise"], answer: "throws" },
    { question: "5. Which superclass handles all exceptions?", options: ["Error","Throwable","Exception","Runtime"], answer: "Throwable" }
  ],
  4: [
    { question: "1. Which interface is implemented for creating threads?", options: ["Runnable","Callable","Threadable","Executor"], answer: "Runnable" },
    { question: "2. Which method starts a thread?", options: ["start()","run()","execute()","init()"], answer: "start()" },
    { question: "3. Which method stops a thread?", options: ["terminate()","stop()","halt()","end()"], answer: "stop()" },
    { question: "4. What is synchronization in Java?", options: ["Thread control","Memory allocation","Variable scope","None"], answer: "Thread control" },
    { question: "5. Which package contains Thread class?", options: ["java.lang","java.util","java.io","java.threads"], answer: "java.lang" }
  ],
  5: [
    { question: "1. Which interface is parent of all collections?", options: ["List","Collection","Iterable","Map"], answer: "Iterable" },
    { question: "2. Which class implements List?", options: ["HashSet","ArrayList","TreeMap","PriorityQueue"], answer: "ArrayList" },
    { question: "3. Which collection does not allow duplicates?", options: ["Set","List","Queue","Map"], answer: "Set" },
    { question: "4. Which map maintains insertion order?", options: ["HashMap","TreeMap","LinkedHashMap","Hashtable"], answer: "LinkedHashMap" },
    { question: "5. Which collection uses key-value pairs?", options: ["Set","Map","List","Array"], answer: "Map" }
  ],
    6: [
    { question: "1. Which class is synchronized?", options: ["ArrayList","Vector","HashSet","TreeMap"], answer: "Vector" },
    { question: "2. Which queue is FIFO?", options: ["PriorityQueue","Deque","ArrayDeque","All"], answer: "All" },
    { question: "3. Which class is not part of Java Collections?", options: ["HashMap","HashTable","ConcurrentHashMap","Properties"], answer: "Properties" },
    { question: "4. Which collection allows null key?", options: ["HashMap","TreeMap","Hashtable","None"], answer: "HashMap" },
    { question: "5. Which interface does HashMap implement?", options: ["List","Map","Set","Queue"], answer: "Map" }
  ],
  7: [
    { question: "1. Which keyword prevents inheritance?", options: ["static","final","const","abstract"], answer: "final" },
    { question: "2. Can we create an object of abstract class?", options: ["Yes","No","Sometimes","Depends"], answer: "No" },
    { question: "3. Which keyword is used for abstract method?", options: ["void","abstract","virtual","final"], answer: "abstract" },
    { question: "4. What is polymorphism?", options: ["Many methods, same name","Many classes","Many variables","None"], answer: "Many methods, same name" },
    { question: "5. Method Overloading occurs at?", options: ["Runtime","Compile time","JVM","None"], answer: "Compile time" }
  ],
  8: [
    { question: "1. Method Overriding occurs at?", options: ["Compile time","Runtime","Both","None"], answer: "Runtime" },
    { question: "2. Which keyword refers to current object?", options: ["super","this","self","me"], answer: "this" },
    { question: "3. Which keyword refers to parent class?", options: ["parent","this","super","extends"], answer: "super" },
    { question: "4. What is encapsulation?", options: ["Wrapping data","Data hiding","Both","None"], answer: "Both" },
    { question: "5. Which keyword provides inheritance?", options: ["extends","implements","inherits","super"], answer: "extends" }
  ],
  9: [
    { question: "1. Can we override static methods?", options: ["Yes","No","Depends","Partially"], answer: "No" },
    { question: "2. Which methods cannot be overridden?", options: ["static","final","private","All"], answer: "All" },
    { question: "3. Can constructors be inherited?", options: ["Yes","No","Sometimes","Depends"], answer: "No" },
    { question: "4. Can constructors be overridden?", options: ["Yes","No","Sometimes","Depends"], answer: "No" },
    { question: "5. Which keyword calls parent constructor?", options: ["this","super","parent","base"], answer: "super" }
  ],
  10: [
    { question: "1. Which package has ArrayList?", options: ["java.io","java.lang","java.util","java.sql"], answer: "java.util" },
    { question: "2. Which collection uses hashing?", options: ["HashMap","TreeSet","PriorityQueue","LinkedList"], answer: "HashMap" },
    { question: "3. Which map is thread-safe?", options: ["HashMap","Hashtable","LinkedHashMap","None"], answer: "Hashtable" },
    { question: "4. Which interface has add()?", options: ["Collection","Map","Iterator","All"], answer: "Collection" },
    { question: "5. Which class implements Queue?", options: ["ArrayList","HashSet","PriorityQueue","TreeMap"], answer: "PriorityQueue" }
  ],

    11: [
    { question: "1. Which class implements LinkedList?", options: ["List","Map","Set","Queue"], answer: "List" },
    { question: "2. Which collection preserves insertion order?", options: ["HashSet","LinkedHashSet","TreeSet","PriorityQueue"], answer: "LinkedHashSet" },
    { question: "3. Which is fastest for random access?", options: ["LinkedList","ArrayList","Vector","Deque"], answer: "ArrayList" },
    { question: "4. Which map keeps keys sorted?", options: ["HashMap","TreeMap","Hashtable","LinkedHashMap"], answer: "TreeMap" },
    { question: "5. Default capacity of ArrayList?", options: ["5","10","15","16"], answer: "10" }
  ],
  12: [
    { question: "1. What is default capacity of HashMap?", options: ["8","16","32","10"], answer: "16" },
    { question: "2. Load factor of HashMap?", options: ["0.5","0.65","0.75","1"], answer: "0.75" },
    { question: "3. Which collection allows duplicate keys?", options: ["HashMap","TreeMap","Hashtable","None"], answer: "None" },
    { question: "4. Which allows duplicate values?", options: ["Map","Set","List","None"], answer: "List" },
    { question: "5. Which interface does List extend?", options: ["Collection","Set","Map","Queue"], answer: "Collection" }
  ],
  13: [
    { question: "1. Which interface Iterator belongs to?", options: ["java.io","java.util","java.lang","java.sql"], answer: "java.util" },
    { question: "2. Which method checks next element in Iterator?", options: ["next()","hasNext()","check()","peek()"], answer: "hasNext()" },
    { question: "3. Which method removes element in Iterator?", options: ["remove()","delete()","clear()","discard()"], answer: "remove()" },
    { question: "4. Which is fail-fast?", options: ["Iterator","Enumeration","Both","None"], answer: "Iterator" },
    { question: "5. Which is fail-safe?", options: ["Iterator","Enumeration","CopyOnWriteArrayList","None"], answer: "CopyOnWriteArrayList" }
  ],
  14: [
    { question: "1. Thread in Java belongs to which package?", options: ["java.io","java.lang","java.util","java.sql"], answer: "java.lang" },
    { question: "2. Which interface for creating thread?", options: ["Runnable","Threadable","Callable","Executor"], answer: "Runnable" },
    { question: "3. Which method starts thread?", options: ["run()","start()","execute()","begin()"], answer: "start()" },
    { question: "4. Which method stops thread?", options: ["stop()","halt()","exit()","kill()"], answer: "stop()" },
    { question: "5. Which method sleeps thread?", options: ["pause()","sleep()","wait()","halt()"], answer: "sleep()" }
  ],
  15: [
    { question: "1. Which method waits for thread to die?", options: ["stop()","join()","sleep()","wait()"], answer: "join()" },
    { question: "2. Which keyword prevents thread execution?", options: ["volatile","synchronized","transient","native"], answer: "synchronized" },
    { question: "3. Which class manages thread pool?", options: ["ThreadPool","Executor","ExecutorService","Future"], answer: "ExecutorService" },
    { question: "4. Which is thread-safe collection?", options: ["ArrayList","CopyOnWriteArrayList","HashSet","HashMap"], answer: "CopyOnWriteArrayList" },
    { question: "5. Which thread state is after start()?", options: ["NEW","RUNNABLE","WAITING","BLOCKED"], answer: "RUNNABLE" }
  ],
  16: [
    { question: "1. Which is a checked exception?", options: ["IOException","NullPointerException","ArithmeticException","ArrayIndexOutOfBounds"], answer: "IOException" },
    { question: "2. Which is an unchecked exception?", options: ["IOException","SQLException","NullPointerException","ClassNotFoundException"], answer: "NullPointerException" },
    { question: "3. Which class is superclass of all exceptions?", options: ["Throwable","Error","Exception","RuntimeException"], answer: "Throwable" },
    { question: "4. Which keyword handles exceptions?", options: ["throw","throws","try-catch","None"], answer: "try-catch" },
    { question: "5. Which block always executes?", options: ["try","catch","finally","throw"], answer: "finally" }
  ],
  17: [
    { question: "1. Which keyword explicitly throws exception?", options: ["throw","throws","catch","raise"], answer: "throw" },
    { question: "2. Which keyword declares exception?", options: ["throw","throws","try","None"], answer: "throws" },
    { question: "3. Which exception occurs if dividing by zero?", options: ["IOException","ArithmeticException","NullPointerException","SQLException"], answer: "ArithmeticException" },
    { question: "4. Which is an error in Java?", options: ["OutOfMemoryError","IOException","SQLException","NullPointerException"], answer: "OutOfMemoryError" },
    { question: "5. Can finally block be skipped?", options: ["Yes","No","Sometimes","Never"], answer: "Sometimes" }
  ],
  18: [
    { question: "1. Which collection is best for LIFO?", options: ["Queue","Stack","LinkedList","HashSet"], answer: "Stack" },
    { question: "2. Which collection is best for FIFO?", options: ["Queue","Stack","Set","TreeMap"], answer: "Queue" },
    { question: "3. Which method pushes element to Stack?", options: ["push()","add()","offer()","insert()"], answer: "push()" },
    { question: "4. Which method removes from Stack?", options: ["delete()","pop()","remove()","poll()"], answer: "pop()" },
    { question: "5. Which method gets top element?", options: ["peek()","top()","first()","last()"], answer: "peek()" }
  ],
  19: [
    { question: "1. Which keyword creates object?", options: ["create","make","new","object"], answer: "new" },
    { question: "2. Which method is constructor?", options: ["Same as class name","Any name","main","init"], answer: "Same as class name" },
    { question: "3. Can constructor return value?", options: ["Yes","No","Sometimes","Depends"], answer: "No" },
    { question: "4. Can constructor be static?", options: ["Yes","No","Depends","Sometimes"], answer: "No" },
    { question: "5. Can constructor be abstract?", options: ["Yes","No","Sometimes","Depends"], answer: "No" }
  ],
  20: [
    { question: "1. Which is base class of String?", options: ["Object","CharSequence","StringBuilder","None"], answer: "Object" },
    { question: "2. String in Java is?", options: ["Immutable","Mutable","Both","None"], answer: "Immutable" },
    { question: "3. Which creates mutable string?", options: ["String","StringBuilder","StringBuffer","Both 2 and 3"], answer: "Both 2 and 3" },
    { question: "4. Which is thread-safe?", options: ["StringBuilder","StringBuffer","Both","None"], answer: "StringBuffer" },
    { question: "5. Which method gets string length?", options: ["length()","size()","count()","len()"], answer: "length()" }
  ],
  21: [
    { question: "1. Which method concatenates strings?", options: ["concat()","append()","join()","merge()"], answer: "concat()" },
    { question: "2. Which method compares strings?", options: ["equals()","==","compare()","check()"], answer: "equals()" },
    { question: "3. Which method ignores case?", options: ["equals()","equalsIgnoreCase()","compare()","compareIgnoreCase()"], answer: "equalsIgnoreCase()" },
    { question: "4. Which method returns substring?", options: ["substring()","sub()","slice()","split()"], answer: "substring()" },
    { question: "5. Which method converts to upper case?", options: ["upper()","toUpperCase()","uppercase()","capitals()"], answer: "toUpperCase()" }
  ],
  22: [
    { question: "1. Which class formats date?", options: ["DateFormat","SimpleDateFormat","DateTimeFormatter","All"], answer: "All" },
    { question: "2. Which package contains Date?", options: ["java.io","java.util","java.sql","java.lang"], answer: "java.util" },
    { question: "3. Which Java version introduced java.time?", options: ["Java 6","Java 7","Java 8","Java 9"], answer: "Java 8" },
    { question: "4. Which class is immutable in java.time?", options: ["LocalDate","LocalTime","LocalDateTime","All"], answer: "All" },
    { question: "5. Which method gives current date?", options: ["now()","today()","current()","get()"], answer: "now()" }
  ],
  23: [
    { question: "1. Which keyword makes constant?", options: ["final","static","const","immutable"], answer: "final" },
    { question: "2. Which keyword for block level constant?", options: ["final","const","let","var"], answer: "final" },
    { question: "3. Which access modifier restricts subclass?", options: ["private","protected","default","public"], answer: "private" },
    { question: "4. Which access modifier allows all?", options: ["private","protected","default","public"], answer: "public" },
    { question: "5. Which access modifier is package-private?", options: ["default","protected","private","None"], answer: "default" }
  ],
  24: [
    { question: "1. Which is marker interface?", options: ["Serializable","Cloneable","Both","None"], answer: "Both" },
    { question: "2. Which interface for cloning?", options: ["Cloneable","Serializable","Comparable","None"], answer: "Cloneable" },
    { question: "3. Which method creates clone?", options: ["clone()","copy()","duplicate()","None"], answer: "clone()" },
    { question: "4. Which exception clone() throws?", options: ["CloneNotSupportedException","IOException","NullPointerException","None"], answer: "CloneNotSupportedException" },
    { question: "5. Which keyword disables cloning?", options: ["final","private","abstract","static"], answer: "private" }
  ],
  25: [
    { question: "1. Which interface for sorting?", options: ["Comparable","Comparator","Both","None"], answer: "Both" },
    { question: "2. Which method in Comparable?", options: ["compareTo()","compare()","equals()","sort()"], answer: "compareTo()" },
    { question: "3. Which method in Comparator?", options: ["compareTo()","compare()","equals()","sort()"], answer: "compare()" },
    { question: "4. Which method sorts array?", options: ["Arrays.sort()","Collections.sort()","Both","None"], answer: "Both" },
    { question: "5. Which order does sort use?", options: ["Natural","Descending","Random","None"], answer: "Natural" }
  ],
  26: [
    { question: "1. What is serialization?", options: ["Convert object to byte","Convert byte to object","Both","None"], answer: "Convert object to byte" },
    { question: "2. Which class handles serialization?", options: ["ObjectOutputStream","ObjectInputStream","Both","None"], answer: "ObjectOutputStream" },
    { question: "3. Which interface is for serialization?", options: ["Serializable","Cloneable","Comparable","None"], answer: "Serializable" },
    { question: "4. Which keyword avoids serialization?", options: ["transient","volatile","static","final"], answer: "transient" },
    { question: "5. Which exception occurs in serialization?", options: ["IOException","ClassNotFoundException","Both","None"], answer: "Both" }
  ],
  27: [
    { question: "1. Which collection is ordered?", options: ["Set","List","Map","HashSet"], answer: "List" },
    { question: "2. Which is unordered?", options: ["HashSet","ArrayList","LinkedHashMap","Vector"], answer: "HashSet" },
    { question: "3. Which is sorted?", options: ["TreeSet","HashSet","LinkedHashSet","None"], answer: "TreeSet" },
    { question: "4. Which is not synchronized?", options: ["Vector","ArrayList","Hashtable","Stack"], answer: "ArrayList" },
    { question: "5. Which is synchronized?", options: ["Vector","ArrayList","HashSet","TreeMap"], answer: "Vector" }
  ],
  28: [
    { question: "1. Which is immutable class?", options: ["String","StringBuffer","StringBuilder","None"], answer: "String" },
    { question: "2. Which creates thread-safe mutable string?", options: ["StringBuilder","StringBuffer","String","None"], answer: "StringBuffer" },
    { question: "3. Which class is faster?", options: ["StringBuilder","StringBuffer","Both","None"], answer: "StringBuilder" },
    { question: "4. Which method reverses string?", options: ["reverse()","invert()","flip()","None"], answer: "reverse()" },
    { question: "5. Which method inserts string?", options: ["insert()","add()","append()","push()"], answer: "insert()" }
  ],
  29: [
    { question: "1. Which is parent of all classes?", options: ["Object","Class","Base","Root"], answer: "Object" },
    { question: "2. Which method of Object compares?", options: ["equals()","==","compare()","check()"], answer: "equals()" },
    { question: "3. Which method of Object clones?", options: ["clone()","copy()","duplicate()","None"], answer: "clone()" },
    { question: "4. Which method gives class name?", options: ["getClass()","className()","type()","None"], answer: "getClass()" },
    { question: "5. Which method finalizes object?", options: ["finalize()","destroy()","clean()","None"], answer: "finalize()" }
  ],
  30: [
    { question: "1. Which keyword prevents method overriding?", options: ["abstract","final","static","private"], answer: "final" },
    { question: "2. Which keyword prevents class inheritance?", options: ["final","abstract","private","static"], answer: "final" },
    { question: "3. Which keyword prevents object creation?", options: ["abstract","final","static","private"], answer: "abstract" },
    { question: "4. Which method cannot be overridden?", options: ["final","abstract","static","All"], answer: "final" },
    { question: "5. Which variable cannot be changed?", options: ["final","static","transient","volatile"], answer: "final" }
  ],
  31: [
    { question: "1. Which is not OOP concept?", options: ["Encapsulation","Polymorphism","Abstraction","Compilation"], answer: "Compilation" },
    { question: "2. Which is feature of OOP?", options: ["Inheritance","Overloading","Overriding","All"], answer: "All" },
    { question: "3. Which supports multiple inheritance?", options: ["Classes","Interfaces","Both","None"], answer: "Interfaces" },
    { question: "4. Which provides complete abstraction?", options: ["Abstract class","Interface","Both","None"], answer: "Interface" },
    { question: "5. Which keyword creates interface?", options: ["interface","implements","extends","None"], answer: "interface" }
  ],
  32: [
    { question: "1. Which is not primitive?", options: ["int","float","char","String"], answer: "String" },
    { question: "2. Which is wrapper for int?", options: ["Integer","Int","Number","Double"], answer: "Integer" },
    { question: "3. Which converts string to int?", options: ["Integer.parseInt()","parseInt()","toInt()","convert()"], answer: "Integer.parseInt()" },
    { question: "4. Which converts int to string?", options: ["String.valueOf()","Integer.toString()","Both","None"], answer: "Both" },
    { question: "5. Which keyword boxes primitive?", options: ["auto","boxing","autoboxing","convert"], answer: "autoboxing" }
  ],
  33: [
    { question: "1. Which is entry point of Java?", options: ["main()","start()","run()","execute()"], answer: "main()" },
    { question: "2. Which method is mandatory in Java program?", options: ["main()","start()","run()","None"], answer: "main()" },
    { question: "3. Can main() be overloaded?", options: ["Yes","No","Sometimes","Depends"], answer: "Yes" },
    { question: "4. Can main() be final?", options: ["Yes","No","Sometimes","Depends"], answer: "Yes" },
    { question: "5. Can main() return value?", options: ["Yes","No","Sometimes","Depends"], answer: "No" }
  ],
  34: [
    { question: "1. Which keyword for inheritance?", options: ["extends","implements","inherits","super"], answer: "extends" },
    { question: "2. Which keyword for implementing interface?", options: ["extends","implements","inherits","super"], answer: "implements" },
    { question: "3. Can interface extend multiple interfaces?", options: ["Yes","No","Depends","Sometimes"], answer: "Yes" },
    { question: "4. Can class implement multiple interfaces?", options: ["Yes","No","Depends","Sometimes"], answer: "Yes" },
  ],
    35: [
    { question: "1. Which class in java.util.regex handles pattern?", options: ["Matcher","Pattern","Scanner","Regex"], answer: "Pattern" },
    { question: "2. Which method checks regex match?", options: ["match()","matches()","equal()","check()"], answer: "matches()" },
    { question: "3. Can Pattern class be instantiated?", options: ["Yes","No","Sometimes","Only in reflection"], answer: "No" },
    { question: "4. Which class finds subsequence in regex?", options: ["Pattern","Matcher","Scanner","String"], answer: "Matcher" },
    { question: "5. Default quantifier in regex?", options: ["+","*","?","Greedy"], answer: "Greedy" }
  ],
  36: [
    { question: "1. Which feature allows methods with same name but different parameters?", options: ["Overriding","Overloading","Shadowing","Binding"], answer: "Overloading" },
    { question: "2. Which feature allows child to redefine parent method?", options: ["Overloading","Overriding","Hiding","Shadowing"], answer: "Overriding" },
    { question: "3. Which keyword allows multiple interfaces?", options: ["extends","implements","include","use"], answer: "implements" },
    { question: "4. Can abstract class have constructor?", options: ["Yes","No","Sometimes","Only default"], answer: "Yes" },
    { question: "5. Can interface have constructor?", options: ["Yes","No","Sometimes","Only default"], answer: "No" }
  ],
  37: [
    { question: "1. Which collection maintains natural order?", options: ["HashSet","LinkedHashSet","TreeSet","ArrayList"], answer: "TreeSet" },
    { question: "2. Which map maintains insertion order?", options: ["HashMap","TreeMap","LinkedHashMap","ConcurrentHashMap"], answer: "LinkedHashMap" },
    { question: "3. Which collection allows duplicate elements?", options: ["Set","List","Map","None"], answer: "List" },
    { question: "4. Which method removes all elements?", options: ["delete()","clear()","removeAll()","empty()"], answer: "clear()" },
    { question: "5. Which collection uses key-value pairs?", options: ["Set","Map","Queue","List"], answer: "Map" }
  ],
  38: [
    { question: "1. Which keyword creates custom exceptions?", options: ["throw","throws","new","exception"], answer: "throw" },
    { question: "2. Which method is called on thread start?", options: ["start()","run()","execute()","begin()"], answer: "start()" },
    { question: "3. Which method in Runnable?", options: ["run()","start()","execute()","begin()"], answer: "run()" },
    { question: "4. Can we start thread twice?", options: ["Yes","No","Sometimes","Only after join"], answer: "No" },
    { question: "5. Which exception for invalid thread state?", options: ["IllegalThreadStateException","ThreadException","RuntimeException","None"], answer: "IllegalThreadStateException" }
  ],
  39: [
    { question: "1. Which method checks thread alive?", options: ["isRunning()","isAlive()","isStarted()","alive()"], answer: "isAlive()" },
    { question: "2. Which method pauses thread?", options: ["stop()","sleep()","wait()","pause()"], answer: "sleep()" },
    { question: "3. Which method waits for thread to die?", options: ["wait()","sleep()","join()","interrupt()"], answer: "join()" },
    { question: "4. Which method interrupts thread?", options: ["interrupt()","stop()","kill()","cancel()"], answer: "interrupt()" },
    { question: "5. Which exception is checked?", options: ["IOException","NullPointerException","ArrayIndexOutOfBoundsException","ArithmeticException"], answer: "IOException" }
  ],
  40: [
    { question: "1. Which feature introduced in Java 8?", options: ["Generics","Lambda Expressions","Enum","Packages"], answer: "Lambda Expressions" },
    { question: "2. Which interface for functional programming?", options: ["Runnable","Callable","FunctionalInterface","Serializable"], answer: "FunctionalInterface" },
    { question: "3. Which stream API method filters data?", options: ["filter()","map()","reduce()","collect()"], answer: "filter()" },
    { question: "4. Which method converts stream to list?", options: ["toList()","collect()","convert()","asList()"], answer: "collect()" },
    { question: "5. Which package has Stream API?", options: ["java.io","java.util.stream","java.util","java.lang"], answer: "java.util.stream" }
  ]
};

