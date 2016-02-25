# Introduction #

These instruction assume a fresh installation of Ubuntu 9.10 with mysql-server and apache already installed


# Details #

Install Django

I installed the Django package from http://djangoproject.org rather than the Ubuntu packaged version

```
wget http://www.djangoproject.com/download/1.1.1/tarball/
tar zxvf Django-1.1.1.tar.gz
cd Django-1.1.1/
python setup.py install
```

Install required Ubuntu packages

```
apt-get install libapache2-mod-python
apt-get install python-mysqldb
apt-get install python-reportlab
apt-get install python-html5lib
apt-get install python-ldap
```

Enable Apache mod-rewrite module

```
cd /etc/apache2
cd mods-enabled/
ln -s ../mods-available/rewrite.load 
```