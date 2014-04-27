#!/bin/bash
#########################################################################
#
# Description: Generic application
# Protocol: HttpProxyPass
#
#########################################################################
#
# Start the application, the application should:
#
# * write the governing process ID to $UIC_APP_PIDFILE
#
# * listen on localhost (127.0.0.1) TCP port $UIC_APP_PORT if protocol
#   is HttpProxyPass.
#
# * expect request redirects relative to the web path $UIC_APP_WEBPATH
#
# If you wish to use FastCGI protocol for your application change the
# Protocol line above from HttpProxyPass to FastCGI.
#
# For FastCGI, have your application:
#
# * listen on UNIX socket $UIC_APP_FASTCGI_SOCKET
#
#########################################################################


# Set the path for the application. If you need to set other environment
# variables, be sure to export them.
PATH="/usr/local/bin:/usr/local/sbin:/usr/bin:/usr/sbin:/bin:/sbin"
export PATH

echo "Starting on" $(date)

#
# Please insert commands to start application below.
#
if [ "$UIC_APP_PROTOCOL" == "HttpProxyPass" ]
then
    node server.js -p 8001
    # Start application listening on localhost (127.0.0.1) TCP port $UIC_APP_PORT
    echo "HttpProxyPass not implemented for this application." >&2
    exit 1
else # $UIC_APP_PROTOCOL == "FastCGI"
    # Start application listening with FastCGI using socket $UIC_APP_FASTCGI_SOCKET
    echo "FastCGI not implemented for this application." >&2
    exit 1
fi
