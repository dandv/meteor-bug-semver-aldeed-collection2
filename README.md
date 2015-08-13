Just run `meteor run` to reproduce.

Expected output:

    Program has no main() function.
    
Actual output:

    The package aldeed:collection2 at 0.1.7 is incompatible with Meteor 0.9.0 or later.
    
v0.1.7 isn't actually the oldest.

```sh
> meteor show aldeed:collection2 --show-all
Versions:
  0.1.0   August 5th, 2014
  0.1.1   August 4th, 2014
  0.1.2   August 4th, 2014
  0.1.3   August 5th, 2014
  0.1.4   August 5th, 2014
  0.1.5   August 5th, 2014
  0.1.6   August 5th, 2014
  0.1.7   August 5th, 2014      installed
  0.2.0   August 5th, 2014
  0.2.1   August 5th, 2014
  ...
```
