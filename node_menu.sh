#!/bin/bash

echo "Choose a server to emulate"
options=("Windows Server 2008 R2" "Windows Server 2012" "Apache" "Quit")
select opt in "${options[@]}"
do
    case $opt in
        "Windows Server 2008 R2")
            nodejs SharePoint14_Headers.js
            ;;
        "Windows Server 2012")
            nodejs Server2012_Headers.js
            ;;
        "Apache")
            nodejs ApacheVarnish_Headers.js
            ;;
        "Quit")
            break
            ;;
        *) echo invalid option;;
    esac
done

