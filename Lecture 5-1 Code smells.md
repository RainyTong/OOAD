## 整理总结 **重构** 部分

##### 一、Code smells.

1. Duplicated code

- Some explicit, some subtle.

:star: Extract method, extract class, templete method pattern.

2. Style smells

- comments

- naming

- dead code

3. Long method

:star:Extract method.

4. Large class

:star: Extract class, extract subclass, <u>observer</u> :question:

5. Long parameter list

- Drawback: volatile(易变的)

:star: Replace parameter with method, introduce parameter object, preserve whole object

6. Divergent change

- 同一个class经常因为不同的原因发生不同的改变

  *E.g., in class X, change mA(), mB(), and mC() every time we add a new database; change mD(), mE(), and mF() every time we add a new financial instrument.* 

:star: Extract class

7. Shotgun surgery

- 一个小change引起很多class的很多改变

:star: Move method, move field, inline class

8. Feature envy

- A method in a class often uses the data(*fields/methods*) from other classes.

:star: Extract method, move method, move field.

9. Data clumps

- 一些data clump应该被绑定在一个object中。

:star: Extract class, preserve whole object, introduce parameter object

10. Primitive obsession

- Old-timers对原始数据类型的“痴迷”

:star: Replace data values with object, **replace type code with class, replace type code with state/strategy**

11. Switch statements

:star: Extract method, move method, replace type code with subclasses :question:, replace type code with state/strategy,  **replace conditional with polymorphism**

---

12. Lazy class (冗赘类) :up::

    :star: 如果这个类没有做足够的工作，*Collapse Hierarchy(折叠继承体系)* ；

    ​      如果是几乎没用的组件， Inline Class(内联类) 

13. Speculative generality(夸夸其谈未来性)

如果所有装置都会被用到，那就值得那么做，如果用不到，就不值得。用不上的装置只会挡你的路，所以，把它搬开。

如果某个抽象类其实没有太大作用，请运用collapse hierarchy，不必要的委托可运用inline class除掉。如果函数的某些参数未被用上，实施remove parameter。如果函数名称带有多余的意味，使用rename method。如果函数和类的唯一用户是测试用例，一并删除。

:star: Collapse hierarchy, inline class, remove parameter, rename method

14. Temporary field

某个实例变量仅为某种特殊情况而设。

请使用 *Extract Class(提炼类)* 给这个孤儿创造一个家, 然后把所有和这个变量相关的代码放进这个新家里. 也许你还可以使用 *Introduce Null Object(引入Null对象)* 在"变量不合法"的情况下创建一个Null对象, 从而避免写出条件代码.

:star: Extract class, introduce null object

15. Message chains

*getThis().getThat().getSomething()*

过度耦合的消息链条，这时候你应该使用 *Hide Delegate(隐藏委托关系)*. 你可以在消息链的不同位置进行这种重构手法. 理论上可以重构消息链条上的任何一个对象, 但是这么做往往会把一系列对象都变成Middle Man.

:star: Hide delegation, extract method, move method

16. Middle man

:star: Remove middle man, inline method, replace delegation with inheritance

17. Inappropriate intimacy

一个类大量使用另一个类的内部字段和方法。

- 最简单的解决方法是运用 `搬移函数(Move Method)` 和 `搬移字段(Move Field)` 来让类之间斩断羁绊。

- 你也可以看看是否能运用 `将双向关联改为单向关联(Change Bidirectional Association to Unidirectional)` 让其中一个类对另一个说分手。
- 如果这两个类实在是情比金坚，难分难舍，可以运用 `提炼类(Extract Class)` 把二者共同点提炼到一个新类中，让它们产生爱的结晶。或者，可以尝试运用 `隐藏委托关系(Hide Delegate)` 让另一个类来为它们牵线搭桥。
- 继承往往造成类之间过分紧密，因为子类对超类的了解总是超过后者的主观愿望，如果你觉得该让这个子类自己闯荡，请运用 `以委托取代继承(Replace Inheritance with Delegation)` 来让超类和子类分家。

:star: Move method, Move field, Change bidirectional association to unidirectional association, Extract class, Hide delegate, Encapsulate collection (for Data Class) 

18. Alternative classes with different interfaces

:star: extract superclass, unify interfaces with adapter

19. Refused bequest

Happens when you inherit code you don’t want.

:star: push down field, push down method, replace inheritance with delegation























