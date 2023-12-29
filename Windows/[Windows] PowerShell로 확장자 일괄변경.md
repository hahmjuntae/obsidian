예) .txt 확장자를 .bak 확장자로 일괄변경 하고싶은 경우 

# CMD
```cmd
ren *.txt *.bak
```
# PowerShell
```shell
Get-ChildItem -Filter *.css | Rename-Item -NewName { $_.Name -replace '.css','.md' }
```



