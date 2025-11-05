def is_palindrome(astr):
    norm = ''.join(astr.split()).lower()
    s = Stack()
    for c in norm:
        s.push(c)
    for c in norm:
        if s.pop()!=c:
            return False
    return True

class Node:
    def __init__(self, value):
        self._value = value
        self._next = None

class LinkedList:
    def __init__(self):
        self._head = None

    def add(self, new):
        new._next = self._head
        self._head = new
